<template>
  <div class="home-introduction">
    <div class="home-introduction__wrapper">
      <div class="home-introduction__left-section left-section">
        <div class="left-section__subtitle">
          Explore Anyer with Us
        </div>
        <div class="left-section__title">
          Plan Tours To Dream Locations In Just A Click!
        </div>
        <div class="left-section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates minus fugit, asperiores tempore explicabo? Quaerat aut aliquid voluptate reprehenderit qui quo! Nulla laudantium deleniti ipsum illum quas cumque quidem
        </div>
        <helper-button text="Start Booking" />
      </div>
      <div class="home-introduction__right-section right-section">
        <div class="right-section__wrapper">

          <div class="right-section__header header">
            <div class="header__title">
              Search Tours
            </div>
            <div class="header__subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
          </div>
          <div class="right-section__form form">
            <div class="form__row row">
              <img
                src="/location.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Destination      
                </div>
                <el-select
                  v-model="province"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="Search destinations"
                  style="box-shadow: none; width: 100%;"
                  class="row__select"
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
            <div class="form__row row">
              <img
                src="/ship.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Tour Type
                </div>
                <el-select
                  v-model="entityType"
                  placeholder="Booking type"
                  style="box-shadow: none; width: 100%;"
                  class="row__select"
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
            <div class="form__row row">
              <img
                src="/clock.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Start Date
                </div>
                <el-date-picker
                  v-model="startDate"
                  :disabled-date="() => {}"
                  type="date"
                  placeholder="Pick a day"
                  class="info__date"
                  prefix-icon="test"
                  format="DD/MM/YYYY"
                  value-format="YYYY-MM-DD"
                />
              </div>
            </div>
            <div class="form__row row last-row">
              <img
                src="/location.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Guests   
                </div>
                <div class="row__value">
                  <el-input
                    v-model="guests"
                    type="number"
                    placeholder="Guests"
                    class="row__guests"
                    min="1"
                  />
                </div>
              </div>
            </div>
            <div class="form__button">
              <NuxtLink
                :to="exploreLink"
                class="form__search-plan"
              >
                <helper-button
                  text="Search Plan"
                  full-width
                  rounded
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dateFormatter } from '@/helpers/date.js'

let province = ref('')
let entityType = ref('')
let startDate = ref('')
let guests = ref(1)

startDate.value = dateFormatter(new Date())

const disabledDate = (time) => {
  // Get the start of today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Disable dates before today (i.e., yesterday and before)
  return time.getTime() < today.getTime();
}

const exploreLink = computed(() => {
  return `/explore?province=${province.value}&entityType=${entityType.value}&startDate=${startDate.value}&guest=${guests.value}`
})

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

let entityTypes = []
const { data: ENTITY_TYPES } = await useFetch('/api/general/all/entity')
entityTypes = JSON.parse(JSON.stringify(ENTITY_TYPES.value))
entityType.value = entityTypes[0]
</script>

<style lang="scss" scoped>
  @import "../../main.scss";
  @import '@/assets/css/responsive.scss';

  .home-introduction {
    background-color: $main-bg-color;
    min-height: calc(100vh - 62px);

    &__wrapper {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;

      @include mobile {
        flex-direction: column;
        justify-content: flex-start;
        gap: 50px;
        padding: 0 16px;
      }
    }

    .left-section {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding-top: 21vh;
      width: 45%;

      @include mobile {
        width: 100%;
        padding-top: 100px;
      }

      &__subtitle {
        color: $sub-text-color;
        font-size: 20px;
      }

      &__title {
        font-size: 64px; 
        font-weight: 700;
        
        @include mobile {
          font-size: 36px;
        }
      }

      &__description {
        font-size: 16px;
      }
    }

    .right-section {
      padding-top: 18vh;
      padding-bottom: 40px;

      @include mobile {
        padding-top: 50px;
      }

      &__wrapper {
        background-color: white;
        border-radius: 16px;
        padding: 30px;
        width: 500px;

        @include mobile {
          width: 100%;
        }
      }

      .header {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: center;

        &__title {
          font-size: 24px;
          font-weight: 700;
        }

        &__subtitle {
          font-size: 14px;
        }
      }

      .form {
        .row {
          padding: 20px 0;
          display: flex;
          gap: 20px;
          border-top: 1px solid lightgray;

          &.last-row {
            border-bottom: 1px solid lightgray;
          }

          &__icon {
            width: 16px;
            height: 16px;
          }

          &__info {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          &__label {
            font-size: 18px;
            line-height: 1;
            font-weight: 700;
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

        &__button {
          padding-top: 20px;
        }

        &__search-plan {
          text-decoration: none;
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
</style>