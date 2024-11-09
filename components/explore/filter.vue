<template>
  <div class="explore-filter">
    <div class="explore-filter__header header">
      <img
        src="/filter.svg"
        alt=""
        class="header__icon"
      >
      <div class="header__title">
        Search By Filter
      </div>
    </div>
    <div class="explore-filter__separator" />
    <div class="explore-filter__general-filters general-filters">
      <div class="general-filters__general-filter general-filter">
        <div class="general-filter__left-section left-section left-section--full-width">
          <img
            src="/location.svg"
            alt=""
            class="left-section__icon"
          >
          <div class="left-section__info info info--full-width">
            <div class="info__label">
              Destination
            </div>
            <div class="info__value">
              <el-select
                v-model="province"
                filterable
                remote
                reserve-keyword
                placeholder="Search destinations"
                style="box-shadow: none; width: 100%;"
                class="info__select"
                @change="handleFilterChange"
              >
                <el-option
                  v-for="item in provinces"
                  :key="item.name"
                  :label="item.label"
                  :value="item.name"
                />
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <div class="general-filters__general-filter general-filter">
        <div class="general-filter__left-section left-section left-section--full-width">
          <img
            src="/ship.svg"
            alt=""
            class="left-section__icon"
          >
          <div class="left-section__info info info--full-width">
            <div class="info__label">
              Tour Type
            </div>
            <div class="info__value">
              <el-select
                v-model="entityType"
                placeholder="Booking type"
                style="box-shadow: none; width: 100%;"
                class="info__select"
                @change="handleFilterChange"
              >
                <el-option
                  v-for="item in entityTypes"
                  :key="item"
                  :label="item[0].toUpperCase() + item.substring(1).toLowerCase()"
                  :value="item"
                />
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <div class="general-filters__general-filter general-filter">
        <div class="general-filter__left-section left-section left-section--full-width">
          <img
            src="/clock.svg"
            alt=""
            class="left-section__icon"
          >
          <div class="left-section__info info info--full-width">
            <div class="info__label">
              Start Date
            </div>
            <div class="info__value">
              <el-date-picker
                v-model="startDate"
                :disabled-date="disabledDate"
                type="date"
                placeholder="Pick a day"
                class="info__date"
                prefix-icon="test"
                format="DD/MM/YYYY"
                value-format="YYYY-MM-DD"
                @change="handleFilterChange"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="general-filters__general-filter general-filter">
        <div class="general-filter__left-section left-section">
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
        <div class="general-filter__right-section right-section">
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
    <div class="explore-filter__header header">
      <div class="header__title">
        Filter By Price
      </div>
    </div>
    <div class="explore-filter__separator" />
    <el-slider
      v-model="priceRange"
      :min="minPrice"
      :max="maxPrice"
      :format-tooltip="convertPriceToRupiah"
      class="explore-filter__slider"
      range
      @change="handlePriceChange"
    />
    <!-- <div class="explore-filter__header header">
      <div class="header__title">
        Traveler Rating
      </div>
    </div>
    <div class="explore-filter__separator" />
    <div class="explore-filter__ratings ratings">
      <div
        v-for="displayedRating in ratings"
        :class="{ 'rating--selected': rating === displayedRating }"
        class="ratings__rating rating"
        @click="handleRatingChange(displayedRating)"
      >
        <div class="rating__number">
          {{ displayedRating  }}
        </div>
        <img
          src="/star.svg"
          alt=""
          class="rating__star"
        >
      </div>
    </div> -->
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()
const emit = defineEmits(['filters-change'])

let province = ref('')
let entityType = ref('')
let startDate = ref('')
let guest = ref(1)
let priceRange = ref([0, 50000000])
// let rating = ref(null)

let entityTypes = []
const disabledDate = (time) => {
  // Get the start of today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Disable dates before today (i.e., yesterday and before)
  return time.getTime() < today.getTime();
}
const minPrice = 0
const maxPrice = 50000000
// const ratings = [1, 2, 3, 4, 5]

const { data: ENTITY_TYPES } = await useFetch('/api/general/all/entity')
entityTypes = JSON.parse(JSON.stringify(ENTITY_TYPES.value))

const { data: PROVINCES } = await useFetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json') 
let provinces = JSON.parse(JSON.stringify(PROVINCES.value))
provinces = provinces.map(province => {
  const label = province.name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    ...province,
    label: label
  };
})

const filters = computed(() => {
  return {
    province: province.value,
    startDate: startDate.value,
    guest: guest.value,
    entityType: entityType.value,
    // rating: rating.value,
    filter: true,
    minPrice: priceRange.value[0],
    maxPrice: priceRange.value[1]
  }
})

const initializeData = () => {
  province.value = route.query.province || ''
  startDate.value = route.query.startDate || null
  guest.value = parseInt(route.query.guest) || 1
  entityType.value = route.query.entityType || ''
  // rating.value = parseInt(route.query.rating) || null
  if (route.query.minPrice && route.query.maxPrice) {
    priceRange.value = [parseInt(route.query.minPrice), parseInt(route.query.maxPrice)]
  }
}

initializeData()

const handleGuestChange = (isAddGuest) => {
  if (!isAddGuest) {
    guest.value = guest.value - 1 === 0 ? guest.value : guest.value - 1
  } else {
    guest.value += 1
  }

  handleFilterChange()
}

const handlePriceChange = (value) => {
  console.log(value)
}

// const handleRatingChange = (selectedRating) => {
//   if (rating.value === selectedRating) {
//     rating.value === null
//   } else {
//     rating.value = selectedRating
//   }

//   handleFilterChange()
// }

const handleFilterChange = () => {
  router.replace({
    path: route.path,
    query: { ...route.query, ...filters.value }
  })
  emit('filters-change')
}
</script>

<style lang="scss" scoped>
  @import "../../main.scss";

  .explore-filter {
    border: 1px solid #c9cbcb;
    border-radius: 12px;
    width: 312px;
    padding: 20px;
    height: fit-content;
    position: sticky;
    top: 20px;

    .header {
      margin-bottom: 15px;
      font-size: 20px;
      font-weight: 700;
      display: flex;
      gap: 12px;
      align-items: center
    }

    &__separator {
      width: 100%;
      height: 1px;
      background-color: #c9cbcb;
      margin-bottom: 15px;
    }

    .general-filters {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 20px;

      .general-filter {
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

    &__slider {
      margin-bottom: 20px;
    }

    .ratings {
      display: flex;
      justify-content: space-between;

      .rating {
        padding: 5px 10px;
        border: 2px solid #c9cbcb;
        border-radius: 5px;
        display: flex;
        gap: 6px;
        align-items: center;
        cursor: pointer;

        &--selected {
          background-color: $main-btn-color;
          border: 2px solid $main-btn-color;
          color: white;
        }

        &__number {
          font-size: 14px;
          font-weight: 500;
        }

        &__star {
          width: 14px;
          height: 14px;
        }
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

  :deep(.el-slider__bar) {
    background-color: $main-btn-color;
  }

  :deep(.el-slider__button) {
    border-color: $main-btn-color;
  }
</style>
