<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Thema from '../thema/Thema.vue'
import { Menu } from 'lucide-vue-next'
import { data } from './data'
</script>

<template>
  <header class="w-full border-b border-base-300 py-4 bg-base-100 sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-4 grid grid-cols-12">
      <RouterLink to="/" class="col-span-6 md:col-span-2">
        <img src="https://topup.ebelanja.id/logo/logo-color.svg" alt="brand" class="h-8" />
      </RouterLink>
      <div class="hidden md:flex text-sm gap-4 col-span-8 justify-center items-center">
        <RouterLink v-for="item in data" :to="item.link" class="btn btn-ghost btn-primary btn-sm">
          <component :is="item.icon" class="size-4" /> {{ item.title }}
        </RouterLink>
      </div>
      <div class="space-x-2 col-span-6 md:col-span-2 flex justify-end">
        <Thema />
        <button class="btn btn-sm btn-square md:hidden">
          <Menu class="size-4.5" />
        </button>
      </div>
    </nav>
  </header>
</template>
