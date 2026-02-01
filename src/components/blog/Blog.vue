<script setup lang="ts">
import { Newspaper } from 'lucide-vue-next'
import { data } from './data'
</script>

<template>
  <section class="py-8 space-y-4">
    <h1 class="font-bold text-base lg:text-2xl flex items-center gap-2">
      <Newspaper class="size-5 lg:size-7" />
      BLOG DAN BERITA
    </h1>
    <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="item in data"
        class="card overflow-hidden border border-base-content/20 shadow-md"
      >
        <img
          :src="item.image"
          alt="image"
          class="w-full h-full aspect-auto-5/6 lg:aspect-video object-cover object-center"
        />
        <div class="p-4">
          <span class="text-xs lg:text-base text-base-content/80">23 Jan 2026</span>
          <h1 class="font-medium text-sm lg:text-lg line-clamp-2">
            {{ item.title }}
          </h1>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center lg:justify-start">
      <button class="btn btn-primary">Muat Lainnya</button>
    </div>
  </section>
</template>
