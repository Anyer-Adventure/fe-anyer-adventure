<template>
  <div class="accomodation-policy">
    <div class="accomodation-policy__title">
      Accomodation Policy
    </div>
    <div class="accomodation-policy__content content">
      <div class="content__left-section left-section">
        <div class="left-section__check-in check-in">
          <div class="check-in__title">
            Check-In
          </div>
          <div class="check-in__description">
            Start at {{ data.checkInTime?.substring(0, data.checkInTime.length - 3) }} WIB
          </div>
        </div>
        <div class="left-section__refund-or-cancellation refund-or-cancellation">
          <div class="refund-or-cancellation__title">
            Refund or Cancellation
          </div>
          <div class="refund-or-cancellation__description">
            {{ data.refundDesc }}
          </div>
        </div>
      </div>
      <div class="content__right-section right-section">
        <div class="right-section__check-out check-out">
          <div class="check-out__title">
            Check-Out
          </div>
          <div class="check-out__description">
            Before at {{ data.checkOutTime?.substring(0, data.checkOutTime.length - 3) }} WIB
          </div>
        </div>
        <div class="right-section__other-policies other-policies">
          <div class="other-policies__title">
            Other Policies
          </div>
          <div class="other-policies__description">
            {{ data.otherPolicy }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped>
  .accomodation-policy {
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .content {
      border-radius: 12px;
      border: 1px solid lightgray;
      font-size: 16px;
      padding: 30px;
      display: flex;
      justify-content: space-between;

      .left-section {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .check-in, .refund-or-cancellation {
          &__title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 5px;
          }

          &__description {
            font-size: 16px;
          }
        }
      }
      
      .right-section {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .check-out, .other-policies {
          &__title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 5px;
          }

          &__description {
            font-size: 16px;
          }
        }
      }
    }
  }
</style>