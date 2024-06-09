<template>
  <div class="card-destination">
    <div class="card-destination__header header">
      <div class="header__type">
        Hotel
      </div>
    </div>
    <div class="card-destination__content content">
      <div class="content__title">
        {{ title }}
      </div>
      <div class="content__location">
        {{ location }}
      </div>
      <div class="content__review">
        {{ rating }} ({{ totalReviews }} reviews)
      </div>
      <div class="content__total-seen-and-discount total-seen-and-discount">
        <div class="total-seen-and-discount__total-seen">
          {{ totalSeen }} dilihat
        </div>
        <div class="total-seen-and-discount__discount">
          {{ discount }}% off
        </div>
      </div>
      <div class="content__price price">
        <div class="price__discounted-price">
          {{ discountedPrice }}
        </div>
        <div class="price__previous-price">
          {{ price }}
        </div>
      </div>
      <div class="content__info">
        per malam, termasuk pajak & biaya lainnya
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  rating: {
    type: String,
    default: ''
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  totalSeen: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  price: {
    type: String,
    default: ''
  },
  discountedPrice: {
    type: String,
    default: ''
  },
  imgUrl: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
  @import "../../main.scss";

  .card-destination {
    width: 312px;
    // height: 384px;
    border-radius: 12px;
    font-size: 16px;
    border: 1px solid #C4C4C4;
    cursor: pointer;
    
    .header {
      background-color: #C4C4C4;
      padding-top: 16px;
      padding-left: 16px;
      height: 200px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;

      &__type {
        border-radius: 4px;
        padding: 10px;
        background-color: white;
        font-size: 14px;
        font-weight: 500;
        width: fit-content;
      }
    }

    .content {
      &__title {
        padding: 10px 10px 0 10px;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      &__location {
        padding-left: 10px;
        color: $sub-text-color;
        font-size: 16px;
        margin-bottom: 10px;
      }

      &__review {
        padding-left: 10px;
        margin-bottom: 10px;
      }

      .total-seen-and-discount {
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;

        &__total-seen {
        }

        &__discount {
          background-color: $red-bg-color;
          padding: 10px;
          color: white;
        }
      }

      .price {
        padding-left: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;

        &__discounted-proce {
          font-size: 18px;
          font-weight: 700;
        }

        &__previous-price {
          color: $red-text-color;
          text-decoration: line-through;
          font-size: 14px;
        }
      }

      &__info {
        padding-left: 10px;
        padding-bottom: 10px;
      }
    }
  }
</style>