<template>
  <div class="card-room">
    <div class="card-room__header header">
      <div class="header__type">
        No-refund
      </div>
    </div>
    <div class="card-room__content content">
      <div class="content__title">
        {{ title }}
      </div>
      <div class="content__capacity">
        <img
          src="/person.svg"
          alt="person"
        >
        Kapasitas {{ capacity }} tamu
      </div>
      <div class="content__bed-type">
        <img
          src="/bed-type.svg"
          alt="bed type"
        >
        {{ bedType }}
      </div>
      <div class="content__area">
        <img
          src="/area.svg"
          alt="area"
        >
        {{ size }} m2
      </div>
      <div class="content__price price">
        <div class="price__discounted-price">
          {{ convertPriceToRupiah(discountedPrice) }}
        </div>
        <div class="price__previous-price">
          {{ convertPriceToRupiah(price) }}
        </div>
      </div>
      <div class="content__info">
        per malam, termasuk pajak & biaya lainnya
      </div>
      <div class="content__choose-room-button">
        <helper-button
          text="Pilih kamar"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { convertPriceToRupiah } from '@/helpers/currency'

defineProps({
  uuid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  capacity: {
    type: String,
    default: ''
  },
  bedType: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: ''
  },
  discountedPrice: {
    type: Number,
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

  .card-room {
    // width: 312px;
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

      &__capacity, &__bed-type, &__area {
        display: flex;
        gap: 12px;
        padding-left: 10px;
        font-size: 16px;
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

      &__choose-room-button {
        padding: 10px;
        display: flex;
        justify-content: end;
      }

      &__info {
        padding: 10px;
      }
    }
  }
</style>