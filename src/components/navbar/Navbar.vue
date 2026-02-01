<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Thema from '../thema/Thema.vue'
import { Menu } from 'lucide-vue-next'
</script>

<template>
  <header class="w-full border-b border-base-300 py-4 bg-base-100 sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-4 flex items-center justify-between">
      <RouterLink to="/">
        <img src="https://topup.ebelanja.id/logo/logo-color.svg" alt="brand" class="h-8" />
      </RouterLink>
      <div class="space-x-2">
        <Thema />
        <button class="btn btn-sm btn-square">
          <Menu class="size-4.5" />
        </button>
      </div>
    </nav>
  </header>
</template>
