<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { useGetNews } from '@/hooks/useGetNews'
import { useRelativeTime } from '@/composables/useRelativeTime'
import IconNewspapper from '@/icons/IconNewspapper.vue'
import { LoaderIcon, TriangleAlertIcon } from 'lucide-vue-next'

// state
const { data, isPending, isRefetching, refetch } = useGetNews()
</script>

<template>
  <Content>
    <h1 class="font-bold text-base lg:text-lg flex items-center gap-2 mb-3 text-primary">
      <IconNewspapper class="size-5 lg:size-6" />
      Berita Terkini
    </h1>

    <section v-if="isPending" class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="_ in 6" class="card bg-base-200 overflow-hidden">
        <div class="w-full aspect-video object-cover skeleton"></div>
        <div class="p-4 space-y-2">
          <h1 class="card-title text-transparent skeleton text-sm md:text-base line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt provident nihil voluptate
            praesentium. Ipsa dignissimos excepturi explicabo a nam facere numquam dicta rem saepe dolor vitae
            praesentium, magni sed.
          </h1>
          <p class="menu-title text-transparent skeleton p-0 text-xs md:text-sm line-clamp-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quo alias odio itaque quidem qui.
            Aspernatur, obcaecati? Ipsa tempora quae enim odit non unde? Repellendus dicta aspernatur reprehenderit
            tenetur adipisci vel, sint inventore sed quia id consectetur vero, ab earum.
          </p>
          <div class="flex justify-between">
            <span class="p-0 text-xs md:text-sm skeleton text-transparent">Lorem, ipsum dolor.</span>
            <span class="p-0 text-xs md:text-sm skeleton text-transparent">Lorem, ipsum.</span>
          </div>
        </div>
      </div>
    </section>

    <section v-if="!isPending && data && data.status != 200" class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex justify-center items-center text-center py-8 bg-base-200 card space-y-2 border border-base-300">
        <p v-if="data.status == 500" class="capitalize card-title text-sm text-error">
          <TriangleAlertIcon class="size-4" /> Terjadi Kesalahan Pada Server.
        </p>
        <p v-else class="capitalize card-title text-sm text-error">
          <TriangleAlertIcon class="size-4" /> {{ data.message }}.
        </p>
        <button class="btn btn-success btn-sm" @click="refetch()">
          <LoaderIcon :class="['size-4', isRefetching && 'animate-spin']" /> Coba Lagi
        </button>
      </div>
    </section>

    <section v-else class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="news in data?.data" class="card bg-base-200 overflow-hidden">
        <img :src="news.image_url" :alt="news.title" class="w-full aspect-video object-cover" />
        <div class="p-4 space-y-2">
          <h1 class="card-title text-sm md:text-base line-clamp-2">{{ news.title }}</h1>
          <p class="menu-title p-0 text-xs md:text-sm line-clamp-4">{{ news.summary }}</p>
          <div class="flex justify-between">
            <span class="p-0 text-xs md:text-sm">{{
              new Date(news.created_at).toLocaleString('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })
            }}</span>
            <span class="p-0 text-xs md:text-sm">{{ useRelativeTime(news.created_at).value }}</span>
          </div>
        </div>
      </div>
    </section>
  </Content>
</template>
