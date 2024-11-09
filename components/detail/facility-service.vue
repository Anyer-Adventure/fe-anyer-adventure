<template>
  <div class="facility-service">
    <div class="facility-service__title">
      Facilities & Service
    </div>
    <div class="facility-service__items items">
      <div
        v-for="(facility, index) in data"
        :key="index"
        class="items__item item"
      >
        <img
          :src="facility.iconUrl"
          alt=""
          class="item__icon"
        >
        <div class="item__text">
          {{ facility.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Array,
    default: []
  }
})
</script>

<style lang="scss" scoped>
  .facility-service {
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .items {
      font-size: 16px;
      display: flex;
      gap: 20px;
      align-items: center;
      flex-wrap: wrap;

      .item {
        display: flex;
        gap: 10px;
        align-items: center;

        &__icon {
          width: 20px;
          height: 20px;
          object-fit: cover;
        }
      }
    }
  }
</style>