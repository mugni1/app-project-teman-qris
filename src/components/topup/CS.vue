<script setup lang="ts">
import { Headphones } from 'lucide-vue-next'
</script>

<template>
  <div class="card-item">
    <div class="flex items-center gap-4">
      <Headphones class="size-10 text-primary" />
      <div>
        <h3 class="card-title text-primary">Butuh Bantuan</h3>
        <p class="stat-title">Kamu bisa hubungi admin disini</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.card-item {
  @apply card bg-base-200 border border-base-300 space-y-2 p-4;
}
</style>
