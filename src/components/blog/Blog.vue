<script setup lang="ts">
import { Newspaper } from 'lucide-vue-next'
</script>

<template>
  <section class="py-8 space-y-4">
    <h1 class="font-bold text-base lg:text-2xl flex items-center gap-2">
      <Newspaper class="size-5 lg:size-7" />
      BLOG DAN BERITA
    </h1>
    <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="_ in 4" class="card overflow-hidden border border-base-content/20 shadow-md">
        <img
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fwujudkan-bangun-kota-impian-di-game-theotown-880676.png&w=384&q=75"
          alt=""
          class="w-full h-full aspect-auto-5/6 lg:aspect-video object-cover object-center"
        />
        <div class="p-4">
          <span class="text-xs lg:text-base text-base-content/80">23 Jan 2026</span>
          <h1 class="font-medium text-sm lg:text-lg line-clamp-2">
            Wujudkan Bangun Kota Impian di Game TheoTown
          </h1>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center lg:justify-start">
      <button class="btn btn-primary">Muat Lainnya</button>
    </div>
  </section>
</template>
