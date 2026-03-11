<script setup lang="ts">
import { ChevronDownCircleIcon } from 'lucide-vue-next'
import { ref, type Ref } from 'vue'
import { computed } from 'vue'
import { useGetNews } from '@/hooks/useGetNews'
import { RouterLink } from 'vue-router'
import type { Params } from '@/types/global.type'
import ListNews from '../news/ListNews.vue'
import PendingNews from '../news/PendingNews.vue'
import Title from '../title/title.vue'
import IconNewspapper from '@/icons/IconNewspapper.vue'
import ErrorCard from '../global/ErrorCard.vue'
import EmptyCard from '../global/EmptyCard.vue'

// state
const page = ref('1')
const limit = ref('4')
const params: Ref<Params> = computed(() => ({
  limit: limit.value,
  page: page.value,
}))

// hooks
const { data, isPending, isRefetching, refetch } = useGetNews(params)
</script>

<template>
  <section class="space-y-4">
    <!-- title  -->
    <Title :icon="IconNewspapper" title="BLOG & BERITA TERKINI" />

    <!-- pending blog and news  -->
    <PendingNews v-if="isPending" />

    <!-- list blog and news -->
    <ListNews v-if="!isPending && data && data.data && data.data.length > 0" :data="data?.data || []" />

    <!-- not have blog and news -->
    <EmptyCard v-if="!isPending && data && data.data && data.data.length < 1" title="Tidak ada berita." />

    <!-- error blog and news  -->
    <ErrorCard
      v-if="!isPending && data && data.status != 200"
      :status="data.status"
      :message="data.message"
      :isRefetching="isRefetching"
      @refetch="refetch()"
    />

    <!-- button show all blog and news  -->
    <div class="w-full flex justify-center lg:justify-start">
      <RouterLink to="/news" class="btn btn-sm md:btn-md btn-primary">
        <ChevronDownCircleIcon class="size-4 md:size-5" /> Lihat Semua
      </RouterLink>
    </div>
  </section>
</template>
