<template>
  <div class="rooms">
    <div class="rooms__filters filters">
      <div class="filters__filter filter">
        <div class="filter__left-section left-section left-section--full-width">
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
                v-model="chkin"
                :clearable="false"
                type="date"
                placeholder="Pick a day"
                class="info__date"
                prefix-icon="test"
                format="DD/MM/YYYY"
                value-format="YYYY-MM-DD"
                @change="handleDateChange"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="filters__filter filter">
        <div class="filter__left-section left-section left-section--full-width">
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
                :clearable="false"
                v-model="chkout"
                type="date"
                placeholder="Pick a day"
                class="info__date"
                prefix-icon="test"
                format="DD/MM/YYYY"
                value-format="YYYY-MM-DD"
                @change="handleDateChange"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="filters__filter filter">
        <div class="filter__left-section left-section">
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
        <div class="filter__right-section right-section">
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
    </div>

    <div class="rooms__places places">
      <helper-card-room
        v-for="room in rooms"
        :key="room.uuid"
        :title="room.name"
        :capacity="room.capacity"
        :bed-type="room.bedType"
        :size="room.size"
        :total-reviews="20"
        :total-seen="2000"
        :price="room.customAvailabilities[0].price"
        :discounted-price="room.customAvailabilities[0].finalPrice"
        class="places__place"
        @click="selectRoom(room)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  rooms: {
    type: Array,
    required: true
  }
})

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['date-change', 'room-select'])

let guest = ref(1)
const chkin = ref('')
const chkout = ref('')

chkin.value = route.query.chkin
chkout.value = route.query.chkout
guest.value = parseInt(route.query.guest)

const handleGuestChange = async (isAddGuest) => {
  if (!isAddGuest) {
    guest.value = guest.value - 1 === 0 ? guest.value : guest.value - 1
  } else {
    guest.value += 1
  }
  await router.replace({
    path: route.path,
    query: {
      ...route.query,
      guest: guest.value
    }
  })
  emit('date-change')
}

const handleDateChange = async () => {
  console.log('masuk')
  await router.replace({
    path: route.path,
    query: {
      ...route.query,
      chkin: chkin.value,
      chkout: chkout.value,
    }
  })
  emit('date-change')
}

const selectRoom = (room) => {
  console.log('select-room')
  emit('room-select', room)
  scrollToSummary()
}

const scrollToSummary = () => {
  if (!document.querySelector('.header')) {
    console.log('header does not exist')
    return
  }
  console.log('header exist')
  document.querySelector('.header').scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
  .rooms {
    max-width: 1200px;
    margin: auto;
    padding: 20px 0;

    .filters {
      display: flex;
      gap: 30px;
      margin-bottom: 20px;

      .filter {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border: 1px solid #c9cbcb;
        border-radius: 8px;
  
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

    .places {
      display: flex;
      gap: 25px;
      flex-wrap: wrap;

      &__place {
        width: calc((100% - 50px) / 3);
      }
    }
  }

  :deep(.el-input__wrapper) {
    box-shadow: none;
    padding-left: 0;
  }
  
  :deep(.el-input__prefix) {
    display: none;
  }
</style>