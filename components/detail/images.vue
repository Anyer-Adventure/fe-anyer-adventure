<template>
  <div class="images">
    <div class="images__main-image">
    </div>
    <div class="images__other-images other-images">
      <div class="other-images__image"></div>
      <div class="other-images__image"></div>
      <div class="other-images__image"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .images {
    max-width: 1200px;
    margin: auto;
    padding: 50px 0;
    display: flex;
    gap: 20px;

    &__main-image {
      background-color: lightgray;
      height: 640px;
      width: 756px;
      border-radius: 10px;
    }

    .other-images {
      display: flex;
      flex-direction: column;
      gap: 20px;

      &__image {
        background-color: lightgray;
        width: 424px;
        height: 200px;
        border-radius: 10px;
      }
    }
  }
</style>