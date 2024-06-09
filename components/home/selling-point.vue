<template>
  <div class="home-selling-point">
    <div class="home-selling-point__header header">
      <div class="header__border"></div>
      <div class="header__title">
        Why Would You Like Us
      </div>
      <div class="header__border"></div>
    </div>
    <div class="home-selling-point__content content">
      <div class="content__card card">
        <img
          src="/selling-point-1.svg"
          alt=""
          class="card__icon"
        >
        <div class="card__information">
          <div class="card__title">
            Best Price Guarantee
          </div>
          <div class="card__description">
            A "Best Price Guarantee" is a commitment offered by businesses typically in the retail or hospitality
          </div>
        </div>
      </div>
      <div class="content__card card">
        <img
          src="/selling-point-1.svg"
          alt=""
          class="card__icon"
        >
        <div class="card__information">
          <div class="card__title">
            Easy & Quick Booking
          </div>
          <div class="card__description">
            A "Best Price Guarantee" is a commitment offered by businesses typically in the retail or hospitality
          </div>
        </div>
      </div>
      <div class="content__card card">
        <img
          src="/selling-point-1.svg"
          alt=""
          class="card__icon"
        >
        <div class="card__information">
          <div class="card__title">
            Tour Guide
          </div>
          <div class="card__description">
            A "Best Price Guarantee" is a commitment offered by businesses typically in the retail or hospitality
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../main.scss";

  .home-selling-point {
    max-width: 1200px;
    margin: auto;
    padding-top: 100px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;

      &__border {
        width: 40%;
        height: 1px;
        background-color: lightgray;
      }

      &__title {
        font-size: 16px;
        font-weight: 700;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;

      .card {
        padding: 30px;
        background-image: linear-gradient(#DAEDEF, white);
        display: flex;
        gap: 20px;
        border-radius: 12px;
        width: 32%;

        &__icon {
          width: 52px;
          height: 52px;
        }

        &__title {
          font-weight: 700;
          margin-bottom: 16px;
        }
      }
    }
  }
</style>