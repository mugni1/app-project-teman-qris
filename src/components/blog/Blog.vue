<script setup lang="ts">
import { ChevronDownCircleIcon } from 'lucide-vue-next'
import IconNewspapper from '@/icons/IconNewspapper.vue'
import type { Params } from '@/types/global.type'
import { ref, type Ref } from 'vue'
import { computed } from 'vue'
import { useGetNews } from '@/hooks/useGetNews'
import { RouterLink } from 'vue-router'
import { useRelativeTime } from '@/composables/useRelativeTime'

const page = ref('1')
const limit = ref('4')
const params: Ref<Params> = computed(() => ({
  limit: limit.value,
  page: page.value,
}))
const { data, isPending, isRefetching, refetch } = useGetNews(params)
</script>

<template>
  <h1 class="font-bold text-base lg:text-xl flex items-center gap-2 mb-3">
    <IconNewspapper class="size-5 lg:size-6" />
    BERITA & BLOG
  </h1>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div v-for="item in data?.data" class="card overflow-hidden border border-base-300 bg-base-200 shadow-md">
      <img :src="item.image_url" alt="image" class="w-full aspect-video object-cover object-center" />
      <div class="p-4 space-y-2">
        <h1 class="font-medium text-sm md:text-base lg:text-lg line-clamp-2">
          {{ item.title }}
        </h1>
        <p class="text-base-content/50 text-xs md:text-sm px-0 line-clamp-3">{{ item.summary }}</p>
        <div class="flex justify-between">
          <span class="text-xs lg:text-sm text-base-content/80">{{
            new Date(item.created_at).toLocaleString('id-ID', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          }}</span>
          <span class="text-xs lg:text-sm text-base-content/80">{{ useRelativeTime(item.created_at).value }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center lg:justify-start">
    <RouterLink to="/news" class="btn btn-sm md:btn-md btn-primary">
      <ChevronDownCircleIcon class="size-4 md:size-5" /> Lihat Semua
    </RouterLink>
  </div>
</template>
