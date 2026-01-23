<script setup lang="ts">
import { TabletSmartphoneIcon } from 'lucide-vue-next'
import { data } from './data'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-8 space-y-4">
    <h1 class="font-bold text-base lg:text-2xl flex items-center gap-2">
      <TabletSmartphoneIcon class="size-5 lg:size-7" />
      TOPUP PULSA / KUOTA
    </h1>
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <div
        v-for="item in data.providers"
        :key="item.title"
        class="card overflow-hidden bg-white shadow-md"
      >
        <RouterLink :to="`/top-up/${item.path_name}`">
          <img
            :src="item.image_url"
            :alt="item.title"
            class="w-full aspect-square object-cover object-center"
          />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
