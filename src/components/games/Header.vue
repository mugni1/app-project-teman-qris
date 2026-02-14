<script setup lang="ts">
import { CloudLightning, Headphones, ScanTextIcon } from 'lucide-vue-next'

const props = defineProps<{
  title: string
  studio: string
  coverUrl: string
  imageUrl: string
}>()
</script>

<template>
  <section class="relative card overflow-hidden bg-base-200 border border-base-300">
    <img :src="coverUrl" alt="banner" loading="lazy" class="h-45 lg:h-80 object-cover object-center" />
    <div class="gap-12 flex items-center p-4 lg:p-8">
      <div class="ms-auto w-7/12 lg:w-10/12 lg:ps-10">
        <h1 class="card-title text-base lg:text-xl line-clamp-1 truncate">{{ title }}</h1>
        <p class="stat-title lg:text-base">{{ studio }}</p>
        <div class="hidden lg:flex items-center gap-4 mt-4 card-title text-xs lg:text-sm">
          <span class="flex items-center gap-2"><CloudLightning class="size-5" /> Proses Cepat</span>
          <span class="flex items-center gap-2"><ScanTextIcon class="size-5" /> Pembayaran Mudah</span>
          <span class="flex items-center gap-2"><Headphones class="size-5" /> CS 24 Jam</span>
        </div>
      </div>
    </div>
    <div class="flex lg:hidden items-center gap-4 card-title text-xs lg:text-sm p-4 pt-0">
      <span class="flex items-center gap-2"><CloudLightning class="size-4" /> Cepat</span>
      <span class="flex items-center gap-2"><ScanTextIcon class="size-4" /> Mudah</span>
      <span class="flex items-center gap-2"><Headphones class="size-4" /> CS 24 Jam</span>
    </div>
    <div class="w-4/12 lg:w-2/12 absolute bottom-12 lg:bottom-8 left-4 lg:left-8 aspect-square">
      <img
        :src="imageUrl"
        alt="image"
        loading="lazy"
        class="card border border-base-300 w-full h-full object-cover object-center"
      />
    </div>
  </section>
</template>
