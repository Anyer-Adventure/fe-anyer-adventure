<template>
  <div class="summary">
    <div class="summary__title">
      Summary
    </div>
    <div class="summary__price-detail price-detail">
      <div class="price-detail__lodge-price lodge-price">
        <div class="lodge-price__label">
          {{ selectedRoom.name }}
        </div>
        <div class="lodge-price__value">
          {{ totalDays }}x {{ convertPriceToRupiah(averagePrice) }}
        </div>
      </div>
      <div class="price-detail__additional-tax additional-tax">
        <div class="additional-tax__label">
          Additional Tax
        </div>
        <div class="additional-tax__value">
          Rp 0
        </div>
      </div>
      <div class="price-detail__additional-tax additional-tax">
        <div class="additional-tax__label">
          Discount
        </div>
        <div class="additional-tax__value">
          {{ convertPriceToRupiah(discountPrice) }}
        </div>
      </div>
    </div>
    <div class="summary__separator" />
    <div class="summary__total-price total-price">
      <div class="total-price__value">
        {{ convertPriceToRupiah((averagePrice * totalDays) - discountPrice)}}
      </div>
      <div class="total-price__description">
        Harga di atas berdasarkan varian yang dipilih
      </div>
    </div>
    <div class="summary__separator" />
    <!-- <div class="summary__date-travelers date-travelers">
      <div class="date-travelers__title">
        Select Date and Travelers
      </div>
      <div class="date-travelers__check-in check-in">
        <div class="check-in__left-section left-section left-section--full-width">
          <img
            src="/clock.svg"
            alt=""
            class="left-section__icon"
          >
          <div class="left-section__info info info--full-width">
            <div class="info__label">
              Check-in
            </div>
            <div class="info__value">
              <el-date-picker
                v-model="checkInDate"
                type="date"
                placeholder="Pick a day"
                class="info__date"
                prefix-icon="test"
                format="DD/MM/YYYY"
                value-format="DD/MM/YYYY"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="date-travelers__check-out check-out">
        <div class="check-out__left-section left-section left-section--full-width">
          <img
            src="/clock.svg"
            alt=""
            class="left-section__icon"
          >
          <div class="left-section__info info info--full-width">
            <div class="info__label">
              Check-out
            </div>
            <div class="info__value">
              <el-date-picker
                v-model="checkOutDate"
                type="date"
                placeholder="Pick a day"
                class="info__date"
                prefix-icon="test"
                format="DD/MM/YYYY"
                value-format="DD/MM/YYYY"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="date-travelers__travelers travelers">
        <div class="travelers__left-section left-section">
          <img
            src="/person.svg"
            alt=""
            class="left-section__icon"
          >
          <div class="left-section__info info">
            <div class="info__label">
              Guests
            </div>
            <div class="info__value">
              {{ guest }}
            </div>
          </div>
        </div>
        <div class="travelers__right-section right-section">
          <img
            src="/minus.svg"
            alt=""
            class="right-section__icon"
            @click="handleGuestChange(false)"
          >
          <img
            src="/plus.svg"
            alt=""
            class="right-section__icon"
            @click="handleGuestChange(true)"
          >
        </div>
      </div>
    </div> -->
    <helper-button
      :rounded="false"
      text="Check Availibility"
      class="summary__button"
      full-width
      @click="checkAvailability"
    />
    <div class="summary__no-cancellation no-cancellation">
      <div class="no-cancellation__title">
        No Cancellation
      </div>
      <div class="no-cancellation__description">
        After payment, you can't cancel the order
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { convertPriceToRupiah } from '@/helpers/currency'

defineProps({
  selectedRoom: {
    type: Object,
    required: true
  },
  averagePrice: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number,
    required: true
  },
  totalDays: {
    type: Number,
    required: true
  }
})

let checkInDate = ref('')
let checkOutDate = ref('')
let guest = ref(1)
const emit = defineEmits(['submit'])
const checkAvailability = () => {
  emit('submit')
}

const handleGuestChange = (isAddGuest) => {
  if (!isAddGuest) {
    guest.value = guest.value - 1 === 0 ? guest.value : guest.value - 1
  } else {
    guest.value += 1
  }
}
</script>

<style lang="scss" scoped>
  .summary {
    position: sticky;
    top: 50px;
    bottom: 0;
    background-color: #EAEBEE;
    padding: 25px;
    border-radius: 12px;

    &__title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .price-detail {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .lodge-price {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__label {
          font-size: 16px;
          font-weight: 700
        }

        &__value {
          font-size: 16px;
        }
      }
      
      .additional-tax {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__label {
          font-size: 16px;
        }

        &__value {
          font-size: 16px;
        }
      }
    }

    &__separator {
      margin: 20px 0;
      height: 1px;
      width: 100%;
      background-color: lightgray;
    }

    .total-price {
      &__value {
        font-size: 40px;
        font-weight: 700;
      }

      &__description {
        font-size: 16px;
      }
    }

    .date-travelers {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &__title {
        font-size: 24px;
        font-weight: 700;
      }

      .travelers, .check-in, .check-out {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border: 1px solid #c9cbcb;
        border-radius: 8px;
        background-color: white;

        .left-section {
          display: flex;
          gap: 12px;

          &--full-width {
            width: 100%
          }

          &__icon {
            width: 16px;
            height: 16px;
          }
  
          .info {
            &--full-width {
              width: 100%;
            }

            &__label {
              font-size: 16px;
              line-height: 16px;
              font-weight: 700;
              margin-bottom: 4px;
            }
    
            &__value {
              font-size: 14px;
            }

            &__select {
              :deep(.el-select__wrapper) {
                box-shadow: none;
                padding-left: 0;
              }  
            }
          }
        }

        .right-section {
          display: flex;
          gap: 10px;
          align-items: center;

          &__icon {
            cursor: pointer;
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    &__button {
      margin: 24px 0;
      border-radius: 8px;
    }

    .no-cancellation {
      &__title {
        font-size: 18px;
        font-weight: 700;
      }

      &__description {
        font-size: 16px;
      }
    }
  }
  
  :deep(.el-date-editor) {
    width: 100%;
    border-radius: 8px;
    border: none;    
  }

  :deep(.el-input__wrapper) {
    box-shadow: none;
    padding-left: 0;
  }
  
  :deep(.el-input__prefix) {
    display: none;
  }
</style>