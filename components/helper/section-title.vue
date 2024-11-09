<template>
  <div class="section-title">
    <div class="section-title__subtitle">
      {{ subtitle }}
    </div>
    <div class="section-title__title">
      {{ title }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  subtitle: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
})
</script>

<style lang="scss" scoped>
  @import "../../main.scss";
  @import '@/assets/css/responsive.scss';

  .section-title {
    width: 458px;
    margin: auto;
    text-align: center;

    @include mobile {
      width: 100%;
    }

    &__subtitle {
      font-size: 20px;
      font-weight: 700;
      color: $sub-text-color;
      margin-bottom: 16px;
    }

    &__title {
      font-size: 40px;
      font-weight: 700;
    }
  }
</style>