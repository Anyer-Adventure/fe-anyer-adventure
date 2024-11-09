<template>
  <div class="location">
    <div class="location__title">
      Location
    </div>
    <iframe
      width="100%"
      height="200"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.%20Kubis%20I%20No.%2099+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      class="location__map"
    >
      <a href="https://www.gps.ie/">
        gps trackers
      </a>
    </iframe>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .location {
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &__map {
      border-radius: 10px;
    }
  }
</style>