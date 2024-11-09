<template>
  <div class="detail">
    <detail-images />
    <detail-header :data="headerData" />
    <div class="detail__separator" />
    <div class="detail__content content">
      <div class="content__left-section">
        <detail-about :description="detailData.description" />
        <detail-facility-service :data="detailData.facilities"/>
        <detail-more-info :more-info="detailData.moreInfo" />
        <detail-location />
        <detail-accomodation-policy :data="accomodationPolicyData" />
      </div>
      <div class="content__right-section right-section">
        <detail-summary
          :selected-room="selectedRoom"
          :average-price="selectedRoomAveragePrice"
          :discount-price="selectedRoomDiscountPrice"
          :total-days="selectedRoomDates.length"
          class="right-section__summary"
          @submit="toggleOrderModal"
        />
      </div>
    </div>

    <div class="detail__choose-your-room-title choose-your-room-title">
      <div class="choose-your-room-title__text">
        Yuk Pilih Kamar Anda
      </div>
    </div>

    <detail-rooms
      :rooms="detailData.rooms"
      @date-change="handleDateChange"
      @room-select="handleSelectedRoomChange"
    />

    <el-dialog
      v-model="visibleOrderModal"
      title="Submit Your Order"
      width="786"
      class="detail__submit-order-modal submit-order-modal"
      style="padding: 50px;"
    >
      <template #header>
        <div class="submit-order-modal__header">
          Submit Your Order
        </div>
      </template>
      <div class="submit-order-modal__title">
        Lodge - {{ selectedRoom.name }}
      </div>
      <div class="submit-order-modal__date-travelers date-travelers">
        <div class="date-travelers__row row">
          <div class="row__label">
            Check-In
          </div>
          <div class="row__value">
            {{ route.query.chkin }}
          </div>
        </div>
        <div class="date-travelers__row row">
          <div class="row__label">
            Check-Out
          </div>
          <div class="row__value">
            {{ route.query.chkout }}
          </div>
        </div>
        <div class="date-travelers__row row">
          <div class="row__label">
            Guest
          </div>
          <div class="row__value">
            {{ route.query.guest }}
          </div>
        </div>
      </div>

      <div class="submit-order-modal__separator" />

      <div class="submit-order-modal__prices prices">
        <div class="prices__lodge-price lodge-price">
          <div class="lodge-price__label">
            Cottage Superior King
          </div>
          <div class="lodge-price__value">
            {{ selectedRoomDates.length }}x {{ convertPriceToRupiah(selectedRoomAveragePrice) }}
          </div>
        </div>
        <div class="prices__additional-tax additional-tax">
          <div class="additional-tax__label">
            Additional Tax
          </div>
          <div class="additional-tax__value">
            Rp0
          </div>
        </div>
        <div class="prices__discount discount">
          <div class="discount__label">
            Discount
          </div>
          <div class="discount__value">
            {{ convertPriceToRupiah(selectedRoomDiscountPrice) }}
          </div>
        </div>
      </div>

      <div class="submit-order-modal__final-price final-price">
        <div class="final-price__value">
          {{ convertPriceToRupiah((selectedRoomAveragePrice * selectedRoomDates.length) - selectedRoomDiscountPrice)}}
        </div>
        <div class="final-price__info">
          Harga di atas berdasarkan varian yang dipilih
        </div>
      </div>

      <div class="submit-order-modal__customer-form customer-form">
        <div class="customer-form__title">
          Input Data Order
        </div>
        <el-input
          v-model="customerName"
          placeholder="Customer Name"
          class="customer-form__input"
        />
        <el-input
          v-model="phoneNumber"
          placeholder="Phone Number"
          class="customer-form__input"
        />
        <el-input
          v-model="notes"
          :rows="4"
          placeholder="Notes"
          type="textarea"
          class="customer-form__input"
        />
      </div>

      <div class="submit-order-modal__additional-info">
        Kami akan menghubungi nomor yang Anda input untuk proses selanjutnya
      </div>

      <template #footer>
        <div class="submit-order-modal__footer footer">
          <helper-button
            :rounded="false"
            text="Order"
            class="footer__button"
            full-width
            @click="submitOrder"
          />
        </div>
      </template>
    </el-dialog>
    
    <el-dialog
      v-model="visibleSuccessModal"
      title=""
      width="786"
      class="detail__success-order-modal success-order-modal"
      style="padding: 50px;"
    >
      <div class="success-order-modal__text">
        Terimakasih {{ customerName }} Telah Melakukan Order
      </div>

      <!-- <template #footer>
        <div class="success-order-modal__footer footer">
          <helper-button
            :rounded="false"
            text="Order"
            class="footer__button"
            full-width
            @click="checkAvailability"
          />
        </div>
      </template> -->
    </el-dialog>
  </div>
</template>

<script setup>
const route = useRoute()

let detailData = reactive({
  name: '',
  category: '',
  startingPrice: '',
  province: '',
  city: '',
  rooms: []
})
let visibleOrderModal = ref(false)
let visibleSuccessModal = ref(false)
let selectedRoom = ref({})
let customerName = ref('')
let phoneNumber = ref('')
let notes = ref('')

const id = computed(() => {
  return route.params.id
})

const headerData = computed(() => {
  return {
    name: detailData.name,
    category: detailData.category,
    startingPrice: detailData.rooms ? detailData.rooms.flatMap(room => room.customAvailabilities).reduce((min, availability) => {
      return availability.finalPrice < min ? availability.finalPrice : min
    }, detailData.rooms.flatMap(room => room.customAvailabilities)[0]?.finalPrice) : '',
    province: detailData.province,
    city: detailData.city
  }
})

const accomodationPolicyData = computed(() => {
  return {
    checkInTime: detailData.checkInTime,
    checkOutTime: detailData.checkOutTime,
    refundDesc: detailData.refundDesc,
    otherPolicy: detailData.otherPolicy,
  }
})

const selectedRoomDates = computed(() => {
  const dates = []
  let currentDate = new Date(route.query.chkin);
  let adjustedEndDate = new Date(route.query.chkout);
  adjustedEndDate.setDate(adjustedEndDate.getDate() - 1);

  while (currentDate <= adjustedEndDate) {
    dates.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates
})

const selectedRoomAveragePrice = computed(() => {
  if (Object.keys(selectedRoom.value).length > 0) {
    const totalFinalPrice = selectedRoom.value.customAvailabilities
    .filter(availability => selectedRoomDates.value.includes(availability.date))
    .reduce((total, availability) => total + availability.price, 0);
  
    return totalFinalPrice/selectedRoomDates.value.length
  }
  return 0
})

const selectedRoomDiscountPrice = computed(() => {
  if (Object.keys(selectedRoom.value).length > 0) {
    const totalDiscountPrice = selectedRoom.value.customAvailabilities
    .filter(availability => selectedRoomDates.value.includes(availability.date))
    .reduce((total, availability) => total + (availability.price - availability.finalPrice), 0);

    return totalDiscountPrice
  }
  return 0
})

const toggleOrderModal = () => {
  visibleOrderModal.value = !visibleOrderModal.value
}

const toggleSuccessModal = () => {
  visibleSuccessModal.value = !visibleSuccessModal.value
}

const submitOrder = async () => {
  console.log('submit order')
  const { data } = await useFetch('/api/transaction/create', {
    body: {
      'entityType': 'LODGE',
      'entityUuid': detailData.uuid,
      'entityCategory': detailData.category,
      'variantUuid': selectedRoom.value.uuid,
      'orderDate': new Date(),
      'checkInDate': route.query.chkin,
      'checkOutDate': route.query.chkout,
      'guest': route.query.guest,
      'customerPhoneNumber': phoneNumber.value,
      'customerName': customerName.value,
      'notes': notes.value,
      'totalTicket': 1,
      'totalPrice': selectedRoomAveragePrice.value * selectedRoomDates.value.length,
      'discountAmount': selectedRoomDiscountPrice.value,
      'totalAmount': (selectedRoomAveragePrice.value * selectedRoomDates.value.length) - selectedRoomDiscountPrice.value,
      'taxAmount': 0,
      'taxPercentage': 0
    }
  })
  toggleOrderModal()
  toggleSuccessModal()
}

const getLodges = async (isDateChange = false) => {
  const { data } = await useFetch('/api/lodge', {
    query: {
      uuid: route.params.id,
      chkin: route.query.chkin,
      chkout: route.query.chkout,
      guest: route.query.guest,
    }
  })

  if (!isDateChange) {
    detailData = data.value
  } else {
    detailData.rooms = data.value.rooms
  }
}

const handleDateChange = () => {
  getLodges(true)
}

const handleSelectedRoomChange = (room) => {
  selectedRoom.value = room
}

await getLodges()
</script>

<style lang="scss" scoped>
  @import "../../main.scss";

  .detail {
    &__separator {
      height: 1px;
      width: 100%;
      background-color: lightgray;
    }

    .content {
      max-width: 1200px;
      margin: auto;
      padding: 50px 0;
      display: flex;
      gap: 20px;

      &__left-section {
        width: 756px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      &__right-section {
        flex-grow: 1;
      }
    }

    .choose-your-room-title {
      background-color: #EFEEDB;
      padding: 50px 0;
      margin-bottom: 20px;
      
      &__text {
        max-width: 1200px;
        margin: auto;
        font-size: 40px;
        font-weight: 700;
      }
    }

    .submit-order-modal {
      &__header {
        font-size: 40px;
        font-weight: 700;
        border-bottom: 1px solid lightgray;
      }

      &__title {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #071516;
      }

      .date-travelers {
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: #071516;

        .row {
          display: flex;
          gap: 20px;
          align-items: center;

          &__label {
            font-size: 24px;
            font-weight: 700;
          }

          &__value {
            font-size: 16px;
            font-weight: 500;
          }
        }
      }

      &__separator {
        width: 100%;
        height: 1px;
        background-color: lightgray;
        margin: 20px 0;
      }

      .prices {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #071516;

        .lodge-price {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &__label, &__value {
            font-size: 16px;
            font-weight: 700;
          }
        }
        
        .additional-tax, .discount {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &__label, &__value {
            font-size: 16px;
          }
        }
      }

      .final-price {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 20px;
        color: #071516;

        &__value {
          font-size: 40px;
          font-weight: 700;
        }

        &__info {
          font-size: 16px;
        }
      }

      .customer-form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #071516;

        &__title {
          font-size: 24px;
          font-weight: 700;
        }

        &__input {
          width: 100%;
        }
      }

      &__additional-info {
        font-size: 14px;
        color: #4B5051;
      }

      .footer {
        text-align: center;

        &__button {
          border-radius: 8px;
        }
      }
    }

    .success-order-modal {
      &__text {
        color: $sub-text-color;
        font-size: 40px;
        font-weight: 700;
      }
    }
  }
</style>