<template>
  <div class="about">
    <div class="about__title">
      About
    </div>
    <div class="about__description">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  description: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
  .about {
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