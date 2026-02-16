<script setup lang="ts">
import Blog from '@/components/blog/Blog.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Content from '@/components/content/Content.vue'
import Description from '@/components/description/Description.vue'
import Games from '@/components/home/Games.vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { ref, watch } from 'vue'
import type { Category } from '@/types/category'
import SimCard from '@/components/home/SimCard.vue'

const { data, refetch, isPending } = useGetCategories()
const simCard = ref<Category[] | undefined>()
const games = ref<Category[] | undefined>()

watch(
  () => data.value,
  (newValue) => {
    if (newValue && newValue.data) {
      games.value = newValue.data.filter((item) => item.type == 'games')
      simCard.value = newValue.data.filter((item) => item.type == 'credit')
    }
  },
)
</script>

<template>
  <Content class="space-y-8">
    <Carousel />
    <SimCard :data="simCard" :is-pending="isPending" />
    <Games :data="games" :is-pending="isPending" />
    <Blog />
    <Description />
  </Content>
</template>
