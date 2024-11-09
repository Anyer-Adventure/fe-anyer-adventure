<template>
  <div class="more-info">
    <div class="more-info__title">
      More Info
    </div>
    <div class="more-info__description">
      {{ moreInfo }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  moreInfo: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
  .more-info {
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &__description {
      font-size: 16px;
    }
  }
</style>