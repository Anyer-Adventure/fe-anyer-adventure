<template>
  <div class="home-popular-packages">
    <helper-section-title
      subtitle="Popular Packages"
      title="Most Favorite Tour Place in Out Trip"
      class="home-popular-packages__header"
    />
    <div class="home-popular-packages__content content">
      <helper-card-destination
        v-for="trip in trips"
        :key="trip.uuid"
        :type="trip.category"
        :title="trip.name"
        :location="`${trip.city}, ${trip.province}`"
        :total-seen="trip.totalViews"
        :discount="parseInt(trip.discountPercentage)"
        :price="parseFloat(trip.price)"
        :discounted-price="parseFloat(trip.finalPrice)"
      />
      <!-- <helper-card-destination
        type="Hotel"
        title="Shinta Corner Ranch and Resort"
        location="Kabupaten Bandung, Jawa Barat"
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
        :total-reviews="20"
        :total-seen="2000"
        :discount="50"
        price="Rp3.519.173"
        discounted-price="Rp1.209.173"
      /> -->
    </div>
    <NuxtLink
      :to="viewAllTourLink"
      class="home-popular-packages__link"
    >
      <helper-button
        text="View All Tour"
        class="home-popular-packages__button"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
import { dateFormatterYYYYMMDD } from '@/helpers/date'

const { data: trips } = await useFetch('/api/general/explore', {
  query: {
    startDate: dateFormatterYYYYMMDD(new Date()),
    guest: 1,
    entityType: 'LODGE'
  }
})
console.log(trips.value)

const viewAllTourLink = computed(() => {
  return `/explore?entityType=LODGE&startDate=${dateFormatterYYYYMMDD(new Date())}&guest=1`
})
</script>

<style lang="scss" scoped>
  @import "../../main.scss";
  @import '@/assets/css/responsive.scss';

  .home-popular-packages {
    max-width: 1200px;
    margin: auto;
    padding: 50px 0;

    @include mobile {
      padding-left: 16px;
      padding-right: 16px;
    }

    &__header {
      margin-bottom: 60px;
    }

    .content {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 60px;

      @include mobile {
        flex-direction: column;
        justify-content: flex-start;
        gap: 30px;
      }
    }

    &__link {
      text-decoration: none;
    }

    &__button {
      margin: auto
    }
  }
</style>