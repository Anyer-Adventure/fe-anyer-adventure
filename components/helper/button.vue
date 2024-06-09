<template>
  <div
    :class="{
      'helper-button--rounded': rounded,
      'helper-button--full-width': fullWidth
    }"
    class="helper-button"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String
  },
  rounded: {
    type: Boolean,
    default: true
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
  @import "../../main.scss";

  .helper-button {
    background-color: $main-btn-color;
    color: white;
    font-size: 16px;
    width: fit-content;
    padding: 10px 25px;
    cursor: pointer;
    transition: ease-in 0.1s;
    text-align: center;

    &--rounded {
      border-radius: 30px;
    }

    &--full-width {
      width: 100%;
    }

    &:hover {
      scale: 1.05;
      transition: ease-in 0.1s;
    }
  }
</style>