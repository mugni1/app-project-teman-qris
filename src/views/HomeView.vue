<script setup lang="ts">
import Blog from '@/components/blog/Blog.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Content from '@/components/content/Content.vue'
import ListItem from '@/components/home/ListItem.vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { onMounted, ref, watch } from 'vue'
import type { Category } from '@/types/category'
import type { Params } from '@/types/global.type'
import IconSmartPhone from '@/icons/IconSmartPhone.vue'
import IconGamepad from '@/icons/IconGamepad.vue'

// state
const params: Params = { limit: '2000' }
const { data, refetch, isPending, isRefetching } = useGetCategories(params)
const simCard = ref<Category[] | undefined>()
const games = ref<Category[] | undefined>()

// watcher
watch(
  () => data.value,
  (newValue) => {
    console.log(newValue?.data)
    if (newValue && newValue.data) {
      games.value = newValue.data.filter((item) => item.type == 'games')
      simCard.value = newValue.data.filter((item) => item.type == 'credit')
    }
  },
)

// onMounted
onMounted(() => {
  if (data.value && data.value.data) {
    games.value = data.value.data.filter((item) => item.type == 'games')
    simCard.value = data.value.data.filter((item) => item.type == 'credit')
  }
})
</script>

<template>
  <Content class="space-y-8">
    <Carousel />
    <ListItem
      title="TOPUP PULSA & KUOTA"
      :icon="IconSmartPhone"
      @refetch="refetch"
      :data="simCard"
      :is-pending="isPending"
      :is-refetching="isRefetching"
      :status="data?.status || 500"
      :message="data?.message || 'Internal server error'"
    />
    <ListItem
      title="TOPUP GAMES"
      :icon="IconGamepad"
      @refetch="refetch"
      :data="games"
      :is-pending="isPending"
      :is-refetching="isRefetching"
      :status="data?.status || 500"
      :message="data?.message || 'Internal server error'"
    />
    <Blog />
  </Content>
</template>
