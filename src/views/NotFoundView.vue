<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleBack = () => {
  router.push('/')
}
</script>

<template>
  <Content class="w-full min-h-screen flex items-center">
    <div class="flex flex-col items-center justify-center w-full h-full gap-5">
      <img src="https://topup.ebelanja.id/404.svg" class="mx-auto mb-4 w-6/12" alt="" />
      <h2 class="text-center text-2xl font-semibold lg:text-3xl">Yah, Halaman ngga ada!</h2>
      <p class="text-center text-sm lg:text-base">
        Maaf ya! Halaman yang kamu cari ngga ada! Boleh dicoba lagi nanti.
      </p>
      <button @click="handleBack" class="btn btn-primary btn-md lg:btn-lg">
        Kembali ke beranda
      </button>
    </div>
  </Content>
</template>
