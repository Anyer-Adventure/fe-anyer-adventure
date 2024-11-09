<template>
  <div class="explore-places">
    <div class="explore-places__header header">
      <div class="header__total-results">
        Showing {{ trips.length }} results
      </div>
      <el-select
        v-model="sort"
        placeholder="Search destinations"
        style="width: 200px;"
        class="info__select"
        @change="handleFilterChange"
      >
        <el-option
          v-for="(sortOption, key) in sortOptions"
          :key="key"
          :label="sortOption.label"
          :value="key"
        />
      </el-select>
    </div>
    <div class="explore-places__separator" />
    <div class="explore-places__places places">
      <el-skeleton
        v-if="!isDataFetched"
        class="places__skeleton-loader"
      />
      <helper-card-destination
        v-else
        v-for="trip in trips"
        :key="trip.uuid"
        :type="trip.category"
        :title="trip.name"
        :location="`${trip.city}, ${trip.province}`"
        :total-seen="trip.totalViews"
        :discount="parseInt(trip.discountPercentage)"
        :price="parseFloat(trip.price)"
        :discounted-price="parseFloat(trip.finalPrice)"
        class="places__place"
        @click="goToDetailPage(trip.uuid)"
      />
    </div>
  </div>
</template>

<script setup>
import { dateFormatterYYYYMMDD } from '@/helpers/date'

const router = useRouter()
const route = useRoute()

let trips = reactive([])
let isDataFetched = ref(false)

const sortOptions = {
  'PRICE_ASC': {
    label: 'Harga termurah',
    option: {
      sortBy: 'PRICE',
      sortOrder: 'ASC'
    }
  },
  'PRICE_DESC': {
    label: 'Harga termahal',
    option: {
      sortBy: 'PRICE',
      sortOrder: 'DESC'
    }
  },
  'VIEWED_DESC': {
    label: 'Paling banyak dilihat',
    option: {
      sortBy: 'VIEW',
      sortOrder: 'DESC'
    }
  },
}

let sort = ref('VIEWED_DESC')
let totalCurrentPageItem = 6
let totalItems = 10

const handleFilterChange = () => {
  router.replace({
    path: route.path,
    query: {
      ...route.query, 
      sortBy: sort.value.split('_')[0], 
      sortOrder: sort.value.split('_')[1]
    }
  })
}

const goToDetailPage = (uuid) => {
  let checkOutDate = new Date(route.query.startDate)
  checkOutDate.setDate(checkOutDate.getDate() + 1)
  router.push(`/detail/${uuid}?chkin=${route.query.startDate}&chkout=${dateFormatterYYYYMMDD(checkOutDate)}&guest=${route.query.guest}`)
}

const { data } = await useFetch('/api/general/explore', {
  query: { ...route.query }
})
trips = data
isDataFetched.value = true
</script>

<style lang="scss" scoped>
  .explore-places {
    width: 100%;
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 31px;

      &__total-results {
        font-size: 16px;
        font-weight: 700;
      }
    }

    &__separator {
      height: 1px;
      width: 100%;
      background-color: #c9cbcb;
      margin-bottom: 27px;
    }

    .places {
      display: flex;
      gap: 25px;
      flex-wrap: wrap;

      &__place, &__skeleton-loader {
        width: calc((100% - 50px) / 3);
      }

      &__skeleton-loader {
        height: 426px;
      }
    }
  }
</style>
