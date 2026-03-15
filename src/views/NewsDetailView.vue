<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
import Content from '@/components/global/Content.vue'
import ErrorCard from '@/components/global/ErrorCard.vue'
import PendingNewsDetail from '@/components/news-detail/PendingNewsDetail.vue'
import { useRelativeTime } from '@/composables/useRelativeTime'
import { useGetNewsDetail } from '@/hooks/useGetNewsDetail'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string
const { data, isPending, isRefetching, refetch } = useGetNewsDetail(id)

watch(data, (newValue) => {
  if (data.value?.status == 404) {
    router.push('/news')
  }
})
</script>

<template>
  <!-- pending -->
  <PendingNewsDetail v-if="isPending" />

  <!-- error  -->
  <Content v-if="!isPending && data && data.status != 200">
    <ErrorCard :is-refetching="isRefetching" :status="data.status" :message="data.message" @refetch="refetch" />
  </Content>

  <!-- has data  -->
  <Content v-if="!isPending && data && data.data && data.status == 200" :data="data.data" class="space-y-4">
    <h1 class="card-title text-lg md:text-2xl lg:text-4xl text-primary lg:leading-snug">{{ data?.data?.title }}</h1>
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
    <div class="ql-editor" v-html="data?.data?.content"></div>
  </Content>
</template>

<style scoped>
@import '../assets/main.css';

.ql-editor {
  @apply px-0;
}

.ql-editor :deep(p) {
  @apply text-sm lg:text-base;
}

.ql-editor :deep(p:empty) {
  @apply h-4;
}

.ql-editor :deep(ul) {
  @apply text-sm lg:text-base py-2;
}

.ql-editor :deep(a) {
  color: lightseagreen;
  text-decoration: underline;
}

.ql-editor :deep(h1) {
  @apply text-2xl lg:text-4xl font-bold;
}

.ql-editor :deep(h2) {
  @apply text-lg lg:text-2xl font-bold;
}

.ql-editor :deep(h3) {
  @apply text-base lg:text-xl font-semibold;
}

/* .ql-editor :deep(strong) {
  font-weight: 600;
}

.ql-editor :deep(img) {
  max-width: 100%;
  height: auto;
} */

/* .ql-editor :deep(table) {
  display: block;
  overflow-x: auto;
}

.ql-editor :deep(pre) {
  overflow-x: auto;
  padding: 12px;
  border-radius: 6px;
} */
</style>
