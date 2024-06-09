<template>
  <div class="home-popular-packages">
    <helper-section-title
      subtitle="Popular Packages"
      title="Most Favorite Tour Place in Out Trip"
      class="home-popular-packages__header"
    />
    <div class="home-popular-packages__content content">
      <helper-card-destination
        type="Hotel"
        title="Shinta Corner Ranch and Resort"
        location="Kabupaten Bandung, Jawa Barat"
        rating="4.7"
        :total-reviews="20"
        :total-seen="2000"
        :discount="50"
        price="Rp3.519.173"
        discounted-price="Rp1.209.173"
      />
      <helper-card-destination
        type="Hotel"
        title="Shinta Corner Ranch and Resort"
        location="Kabupaten Bandung, Jawa Barat"
        rating="4.7"
        :total-reviews="20"
        :total-seen="2000"
        :discount="50"
        price="Rp3.519.173"
        discounted-price="Rp1.209.173"
      />
      <helper-card-destination
        type="Hotel"
        title="Shinta Corner Ranch and Resort"
        location="Kabupaten Bandung, Jawa Barat"
        rating="4.7"
        :total-reviews="20"
        :total-seen="2000"
        :discount="50"
        price="Rp3.519.173"
        discounted-price="Rp1.209.173"
      />
    </div>
    <helper-button
      text="View All Tour"
      class="home-popular-packages__button"
    />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../main.scss";

  .home-popular-packages {
    max-width: 1200px;
    margin: auto;
    padding: 50px 0;

    &__header {
      margin-bottom: 60px;
    }

    .content {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 60px;
    }

    &__button {
      margin: auto
    }
  }
</style>