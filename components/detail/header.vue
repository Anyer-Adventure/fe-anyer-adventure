<template>
  <div class="header">
    <div class="header__left-section left-section">
      <div class="left-section__title title">
        <div class="title__text">
          {{ data.name }}
        </div>
        <div class="title__type">
          {{ data.category }}
        </div>
      </div>
      <div class="left-section__information information">
        <div class="information__location location">
          <img
            src="/location.svg"
            alt=""
            class="location__icon"
          >
          <div class="location__text">
            {{ data.city }}, {{ data.province }}
          </div>
        </div>
        <!-- <div class="information__separator" />
        <div class="information__max-person max-person">
          <img
            src="/person.svg"
            alt=""
            class="max-person__icon"
          >
          <div class="max-person__text">
            Maximum 2 Person
          </div>
        </div> -->
      </div>
    </div>
    <div class="header__right-section right-section">
      <div class="right-section__price price">
        <div class="price__starts-from">
          Mulai dari
        </div>
        <div class="price__value">
          {{ convertPriceToRupiah(data.startingPrice) }}
        </div>
      </div>
      <div class="right-section__additional-info">
        Per malam
      </div>
      <!-- <div class="right-section__ratings ratings">
        <img
          src="/star.svg"
          alt=""
          class="ratings__icon"
        >
        <div class="ratings__value">
          4.7 (20 reviews)
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped>
  @import "../../main.scss";

  .header {
    max-width: 1200px;
    margin: auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;

    .left-section {
      .title {
        display: flex;
        gap: 30px;
        align-items: center;
        margin-bottom: 16px;

        &__text {
          font-size: 40px;
          font-weight: 700;
        }

        &__type {
          padding: 10px 15px;
          background-color: #C51605;
          color: white;
          font-size: 14px;
          font-weight: 500;
          border-radius: 10px;
        }
      }

      .information {
        display: flex;
        gap: 25px;
        align-items: center;

        .location {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        &__separator {
          width: 1px;
          height: 21px;
          background-color: lightgray;
        }

        .max-person {
          display: flex;
          gap: 10px;
          align-items: center;
        }
      }
    }

    .right-section {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .price {
        display: flex;
        gap: 15px;
        align-items: center;

        &__starts-from {
          font-size: 18px;
          color: #4B5051;
        }

        &__value {
          font-size: 40px;
          font-weight: 700;
        }
      }

      &__additional-info {
        display: flex;
        justify-content: flex-end;
        font-size: 16px;
        color: $sub-text-color;
      }

      .ratings {
        display: flex;
        gap: 10px;
        justify-content: flex-end;

        &__icon {

        }

        &__value {
          font-size: 16px;
        }
      }
    }
  }
</style>