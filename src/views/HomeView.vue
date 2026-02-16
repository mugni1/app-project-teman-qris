<script setup lang="ts">
import Blog from '@/components/blog/Blog.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Content from '@/components/content/Content.vue'
import Description from '@/components/description/Description.vue'
import Games from '@/components/home/Games.vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { onMounted, ref, watch } from 'vue'
import type { Category } from '@/types/category'
import SimCard from '@/components/home/SimCard.vue'

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
    <SimCard
      @refetch="refetch"
      :data="simCard"
      :is-pending="isPending"
      :is-refetching="isRefetching"
      :status="data?.status || 500"
      :message="data?.message || 'Internal server error'"
    />
    <Games
      @refetch="refetch"
      :data="games"
      :is-pending="isPending"
      :is-refetching="isRefetching"
      :status="data?.status || 500"
      :message="data?.message || 'Internal server error'"
    />
    <Blog />
    <Description />
  </Content>
</template>
