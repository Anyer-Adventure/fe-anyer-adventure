<template>
  <div class="home-special-offers">
    <helper-section-title
      subtitle="Special Offers"
      title="Winter Our Big Offers to Inspire You"
      class="home-special-offers__header"
    />
    <div class="home-special-offers__content content">
      <div
        v-for="place in places"
        :style="{ backgroundImage: `url(${place.imageUrl})` }"
        class="content__card card"
      >
        <!-- <div class="card__title">
          Nearby Hotel
        </div>
        <div class="card__description">
          Up to 50% Off The Best Hotels Near
        </div>
        <div class="card__location">
          Anyer, Banten
        </div> -->
        <helper-button text="Booking Now"/>
      </div>
    </div>
  </div>
</template>

<script setup>
let places = reactive([])
const { data } = await useFetch('/api/banner/all')
// const { data: count } = await useFetch('/api/users')
// const { data: products } = await useFetch('https://fakestoreapi.com/products')
places = data.value
console.log('test', data.value)

// console.log('Data:', data)
// console.log('Error:', error.value)
</script>

<style lang="scss" scoped>
  @import "../../main.scss";
  @import '@/assets/css/responsive.scss';

  .home-special-offers {
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
      gap: 30px;
      justify-content: center;

      @include mobile {
        flex-direction: column;
        justify-content: flex-start;
        gap: 30px;
      }

      .card {
        padding: 30px;
        background-image: linear-gradient(to right, black, #BABDBD);
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 12px;
        width: 32%;
        color: white;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        @include mobile {
          width: 100%;
        }

        &__title {
          font-weight: 700;
          font-size: 64px;
          margin-bottom: 20px;
        }

        &__location {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>