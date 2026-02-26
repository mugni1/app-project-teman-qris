<script setup lang="ts">
import Blog from '@/components/blog/Blog.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Content from '@/components/content/Content.vue'
import Description from '@/components/description/Description.vue'
import ListItem from '@/components/home/ListItem.vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { onMounted, ref, watch } from 'vue'
import { JoystickIcon, SmartphoneChargingIcon } from 'lucide-vue-next'
import type { Category } from '@/types/category'

// state
const { data, refetch, isPending, isRefetching } = useGetCategories()
const simCard = ref<Category[] | undefined>()
const games = ref<Category[] | undefined>()

// watcher
watch(
  () => data.value,
  (newValue) => {
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
      :icon="SmartphoneChargingIcon"
      @refetch="refetch"
      :data="simCard"
      :is-pending="isPending"
      :is-refetching="isRefetching"
      :status="data?.status || 500"
      :message="data?.message || 'Internal server error'"
    />
    <ListItem
      title="TOPUP GAMES"
      :icon="JoystickIcon"
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
