<script setup lang="ts">
import { CheckCircleIcon, CloudLightning, FanIcon, Headphones, LampDesk } from 'lucide-vue-next'
</script>

<template>
  <section class="py-8 space-y-4">
    <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl">MENGAPA HARUS TOPUP DI SINI</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="flex gap-4">
        <FanIcon class="size-16 text-primary" />
        <div class="text-base">
          <b class="text-base lg:text-xl md:text-lg">Penawaran Menarik</b>
          <p class="text-sm md:text-base lg:text-base text-base-content/80">
            Selalu memberikan penawaran menarik dan diskon untuk produk-produk kami untukmu.
          </p>
        </div>
      </div>
      <div class="flex gap-4">
        <CloudLightning class="size-16 text-primary" />
        <div class="text-base">
          <b class="text-base lg:text-xl md:text-lg">Proses Cepat</b>
          <p class="text-sm md:text-base lg:text-base text-base-content/80">
            Selalu memberikan penawaran menarik dan diskon untuk produk-produk kami untukmu.
          </p>
        </div>
      </div>
      <div class="flex gap-4">
        <Headphones class="size-14.5 text-primary" />
        <div class="text-base">
          <b class="text-base lg:text-xl md:text-lg">Dukungan 24/7 tanpa kenal waktu </b>
          <p class="text-sm md:text-base lg:text-base text-base-content/80">
            Tim kami akan selalu siap sedia membantu kamu 7 hari 24 jam tanpa kenal waktu.
          </p>
        </div>
      </div>
      <div class="flex gap-4">
        <CheckCircleIcon class="size-13.5 text-primary" />
        <div class="text-base">
          <b class="text-base lg:text-xl md:text-lg">Pembayaran aman, jaminan uang kembali</b>
          <p class="text-sm md:text-base lg:text-base text-base-content/80">
            Jaminan pembayaran yang aman dan mudah dengan jaminan uang kembali.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
