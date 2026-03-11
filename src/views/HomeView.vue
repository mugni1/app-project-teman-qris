<script setup lang="ts">
import type { Category } from '@/types/category'
import type { Params } from '@/types/global.type'
import Carousel from '@/components/carousel/Carousel.vue'
import Content from '@/components/content/Content.vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { onMounted, ref, watch } from 'vue'
import IconSmartPhone from '@/icons/IconSmartPhone.vue'
import IconGamepad from '@/icons/IconGamepad.vue'
import HomeBlogAndNews from '@/components/home/HomeBlogAndNews.vue'
import HomeListItem from '@/components/home/HomeListItem.vue'

// state
const creditParams: Params = { limit: '12', type: 'credit' }
const gamesParams: Params = { limit: '12', type: 'games' }
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
const credit = ref<Category[] | undefined>()
const games = ref<Category[] | undefined>()

// watcher
watch(
  () => dataCredit.value,
  (newValue) => {
    credit.value = newValue?.data || []
  },
)
watch(
  () => dataGames.value,
  (newValue) => {
    games.value = newValue?.data || []
  },
)

// onMounted
onMounted(() => {
  if (dataCredit.value && dataCredit.value.data) {
    credit.value = dataCredit.value.data
  }
  if (dataGames.value && dataGames.value.data) {
    games.value = dataGames.value.data
  }
})
</script>

<template>
  <Content class="space-y-8">
    <Carousel />
    <HomeListItem
      title="TOPUP PULSA & KUOTA"
      :icon="IconSmartPhone"
      :data="credit"
      :is-pending="isPendingCredit"
      :is-refetching="isRefetchingCredit"
      :status="dataCredit?.status || 500"
      :message="dataCredit?.message || 'Internal server error'"
      @refetch="refetchCredit"
    />
    <HomeListItem
      title="TOPUP GAMES"
      :icon="IconGamepad"
      :data="games"
      :is-pending="isPendingGames"
      :is-refetching="isRefetchingGames"
      :status="dataGames?.status || 500"
      :message="dataGames?.message || 'Internal server error'"
      @refetch="refetchGames"
    />
    <HomeBlogAndNews />
  </Content>
</template>
