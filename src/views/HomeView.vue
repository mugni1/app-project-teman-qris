<script setup lang="ts">
import type { Category } from '@/types/category'
import type { Params } from '@/types/global.type'
import Content from '@/components/global/Content.vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { onMounted, ref, watch, computed } from 'vue'
import IconSmartPhone from '@/icons/IconSmartPhone.vue'
import IconGamepad from '@/icons/IconGamepad.vue'
import HomeBlogAndNews from '@/components/home/HomeBlogAndNews.vue'
import HomeCategory from '@/components/home/HomeCategory.vue'
import HomeCarousel from '@/components/home/HomeCarousel.vue'

// state
const pageCredit = ref(1)
const pageGames = ref(1)
const credit = ref<Category[]>([])
const games = ref<Category[]>([])
const creditParams = computed<Params>(() => ({
  limit: '12',
  type: 'credit',
  page: String(pageCredit.value),
}))
const gamesParams = computed<Params>(() => ({
  limit: '12',
  type: 'games',
  page: String(pageGames.value),
}))

// hooks
const {
  data: dataCredit,
  refetch: refetchCredit,
  isPending: isPendingCredit,
  isRefetching: isRefetchingCredit,
} = useGetCategories(creditParams)

const {
  data: dataGames,
  refetch: refetchGames,
  isPending: isPendingGames,
  isRefetching: isRefetchingGames,
} = useGetCategories(gamesParams)

// methods
const incrementPageCredit = () => {
  pageCredit.value++
}
const incrementPageGames = () => {
  pageGames.value++
}

// watcher
watch(
  () => dataCredit.value,
  (newValue) => {
    if (!newValue?.data) return
    credit.value.push(...newValue.data)
  },
)
watch(
  () => dataGames.value,
  (newValue) => {
    if (!newValue?.data) return
    games.value.push(...newValue.data)
  },
)

// initial
onMounted(() => {
  if (dataCredit.value?.data) {
    credit.value = dataCredit.value.data
  }
  if (dataGames.value?.data) {
    games.value = dataGames.value.data
  }
})
</script>

<template>
  <Content class="space-y-8">
    <!-- list carousel  -->
    <HomeCarousel />

    <!-- list category credit and quota  -->
    <HomeCategory
      title="TOPUP PULSA & KUOTA"
      :icon="IconSmartPhone"
      :data="credit"
      :meta="dataCredit?.meta || undefined"
      :is-pending="isPendingCredit"
      :is-refetching="isRefetchingCredit"
      :status="dataCredit?.status || 500"
      :message="dataCredit?.message || 'Internal server error'"
      @increment="incrementPageCredit"
      @refetch="refetchCredit"
    />

    <!-- list category games -->
    <HomeCategory
      title="TOPUP GAMES"
      :icon="IconGamepad"
      :data="games"
      :meta="dataGames?.meta || undefined"
      :is-pending="isPendingGames"
      :is-refetching="isRefetchingGames"
      :status="dataGames?.status || 500"
      :message="dataGames?.message || 'Internal server error'"
      @increment="incrementPageGames"
      @refetch="refetchGames"
    />

    <!-- list blog and news -->
    <HomeBlogAndNews />
  </Content>
</template>
