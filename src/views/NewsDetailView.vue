<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import PendingNewsDetail from '@/components/news-detail/PendingNewsDetail.vue'
import { useRelativeTime } from '@/composables/useRelativeTime'
import { useGetNewsDetail } from '@/hooks/useGetNewsDetail'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
const { data, isPending, isRefetching, refetch } = useGetNewsDetail(id)
</script>

<template>
  <PendingNewsDetail v-if="isPending" />
  <Content v-if="!isPending && data && data.data && data.status == 200" :data="data.data" class="space-y-4">
    <h1 class="card-title text-lg lg:text-3xl text-primary lg:leading-snug">{{ data?.data?.title }}</h1>
    <div class="flex justify-between">
      <span class="card-title text-xs md:text-sm">{{
        new Date(data.data.created_at).toLocaleString('id-ID', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      }}</span>
      <span class="card-title text-xs md:text-sm">{{ useRelativeTime(data.data.created_at).value }}</span>
    </div>
    <div>
      <img
        class="w-full bg-base-200 card aspect-video object-cover border border-base-300"
        :src="data?.data?.image_url"
        :alt="data?.data?.title"
      />
    </div>
    <div class="ql-editor max-w-full text-sm lg:text-base" v-html="data?.data?.content"></div>
  </Content>
</template>

<style scoped>
p {
  margin: 14px 0;
}

p:empty {
  height: 14px;
}

.ql-editor {
  line-height: 1.7;
  word-break: break-word;
}

/* ini penting */
.ql-editor :deep(p) {
  margin: 8px 0;
}

.ql-editor :deep(p:empty) {
  height: 14px;
}

.ql-editor :deep(strong) {
  font-weight: 600;
}

.ql-editor :deep(img) {
  max-width: 100%;
  height: auto;
}

.ql-editor :deep(table) {
  display: block;
  overflow-x: auto;
}

.ql-editor :deep(pre) {
  overflow-x: auto;
  padding: 12px;
  border-radius: 6px;
}

.ql-editor :deep(h1) {
  font-size: 2em;
}

.ql-editor :deep(h2) {
  font-size: 1.5em;
}

.ql-editor :deep(h3) {
  font-size: 1.17em;
}
</style>
