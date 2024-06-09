<template>
  <div class="home-introduction">
    <div class="home-introduction__wrapper">
      <div class="home-introduction__left-section left-section">
        <div class="left-section__subtitle">
          Explore Anyer with Us
        </div>
        <div class="left-section__title">
          Plan Tours To Dream Locations In Just A Click!
        </div>
        <div class="left-section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates minus fugit, asperiores tempore explicabo? Quaerat aut aliquid voluptate reprehenderit qui quo! Nulla laudantium deleniti ipsum illum quas cumque quidem
        </div>
        <helper-button text="Start Booking" />
      </div>
      <div class="home-introduction__right-section right-section">
        <div class="right-section__wrapper">

          <div class="right-section__header header">
            <div class="header__title">
              Search Tours
            </div>
            <div class="header__subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
          </div>
          <div class="right-section__form form">
            <div class="form__row row">
              <img
                src="/location.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Destination      
                </div>
                <div class="row__value">
                  Sydney, Australia
                </div>
              </div>
            </div>
            <div class="form__row row">
              <img
                src="/location.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Destination      
                </div>
                <div class="row__value">
                  Sydney, Australia
                </div>
              </div>
            </div>
            <div class="form__row row">
              <img
                src="/location.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Destination      
                </div>
                <div class="row__value">
                  Sydney, Australia
                </div>
              </div>
            </div>
            <div class="form__row row last-row">
              <img
                src="/location.svg"
                alt=""
                class="row__icon"
              >
              <div class="row__info">
                <div class="row__label">
                  Destination      
                </div>
                <div class="row__value">
                  Sydney, Australia
                </div>
              </div>
            </div>
            <div class="form__button">
              <helper-button
                text="Search Plan"
                full-width
                rounded
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../main.scss";

  .home-introduction {
    background-color: $main-bg-color;
    min-height: calc(100vh - 62px);

    &__wrapper {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }

    .left-section {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding-top: 21vh;
      width: 45%;

      &__subtitle {
        color: $sub-text-color;
        font-size: 20px;
      }

      &__title {
        font-size: 64px; 
        font-weight: 700;
      }

      &__description {
        font-size: 16px;
      }
    }

    .right-section {
      padding-top: 18vh;
      padding-bottom: 40px;

      &__wrapper {
        background-color: white;
        border-radius: 16px;
        padding: 30px;
        width: 500px;
      }

      .header {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: center;

        &__title {
          font-size: 24px;
          font-weight: 700;
        }

        &__subtitle {
          font-size: 14px;
        }
      }

      .form {
        .row {
          padding: 20px 0;
          display: flex;
          gap: 20px;
          border-top: 1px solid lightgray;

          &.last-row {
            border-bottom: 1px solid lightgray;
          }

          &__icon {
            width: 16px;
            height: 16px;
          }

          &__info {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          &__label {
            font-size: 18px;
            line-height: 1;
            font-weight: 700;
          }

          &__value {
            font-size: 14px;
          }
        }

        &__button {
          padding-top: 20px;
        }
      }
    }
  }
</style>