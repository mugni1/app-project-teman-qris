<script setup lang="ts">
import type { Params } from '@/types/global.type'
import { computed, ref, type Ref } from 'vue'
import { useGetNews } from '@/hooks/useGetNews'
import PaginationNews from '@/components/news/PaginationNews.vue'
import Content from '@/components/content/Content.vue'
import IconNewspapper from '@/icons/IconNewspapper.vue'
import PendingNews from '@/components/news/PendingNews.vue'
import ListNews from '@/components/news/ListNews.vue'
import ErrorCard from '@/components/global/ErrorCard.vue'
import EmptyCard from '@/components/global/EmptyCard.vue'
import Title from '@/components/global/Title.vue'

// state
const page = ref('1')
const limit = ref('6')
const params: Ref<Params> = computed(() => ({
  limit: limit.value,
  page: page.value,
}))
const { data, isPending, isRefetching, refetch } = useGetNews(params)

// methods
const handleChangePage = (v: number) => {
  page.value = v.toString()
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <Content class="space-y-4">
    <Title :icon="IconNewspapper" title="BLOG & BERITA TERKINI" />
    <PendingNews v-if="isPending" />
    <ListNews v-if="!isPending && data && data.data && data.data.length > 0 && data.status == 200" :data="data.data" />
    <PaginationNews
      v-if="!isPending && data && data.data && data.data.length > 0 && data.status == 200"
      :data="data.data"
      :page="page"
      :limit="limit"
      @changePage="handleChangePage"
    />
    <EmptyCard
      v-if="!isPending && data && data.data && data.data.length < 1 && data.status == 200"
      title="Tidak ada berita."
    />
    <ErrorCard
      v-if="!isPending && data && data.status != 200"
      :status="data.status"
      :message="data.message"
      :isRefetching="isRefetching"
      @refetch="refetch()"
    />
  </Content>
</template>
