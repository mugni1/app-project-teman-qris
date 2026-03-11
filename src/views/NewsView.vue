<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { useGetNews } from '@/hooks/useGetNews'
import IconNewspapper from '@/icons/IconNewspapper.vue'
import PendingNews from '@/components/news/PendingNews.vue'
import ErrorNews from '@/components/news/ErrorNews.vue'
import NotHaveNews from '@/components/news/NotHaveNews.vue'
import ListNews from '@/components/news/ListNews.vue'
import { computed, ref, type Ref } from 'vue'
import type { Params } from '@/types/global.type'

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
  <Content>
    <h1 class="font-bold text-base lg:text-lg flex items-center gap-2 mb-3 text-primary">
      <IconNewspapper class="size-5 lg:size-6" />
      Blog Dan Berita Terkini
    </h1>
    <PendingNews v-if="isPending" />
    <NotHaveNews v-if="!isPending && data && data.data && data.data.length < 1 && data.status == 200" />
    <ListNews
      v-if="!isPending && data && data.data && data.data.length > 0 && data.status == 200"
      :data="data.data"
      :page="page"
      :limit="limit"
      @changePage="handleChangePage"
    />
    <ErrorNews
      v-if="!isPending && data && data.status != 200"
      :status="data.status"
      :message="data.message"
      :isRefetching="isRefetching"
      @refetch="refetch()"
    />
  </Content>
</template>
