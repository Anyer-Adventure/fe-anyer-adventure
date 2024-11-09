<template>
  <div class="explore">
    <explore-filter @filters-change="reloadComponents" />
    <explore-places :key="uniqueKey" />
  </div>
</template>

<script setup>
let uniqueKey = ref(0)
const reloadComponents = () => {
  uniqueKey.value += 1
}
</script>

<style lang="scss" scoped>
  .explore {
    max-width: 1200px;
    margin: auto;
    padding: 50px 0;
    display: flex;
    gap: 22px;
  }
</style>