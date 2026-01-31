<script setup lang="ts">
import { CheckCircle, CreditCard, Loader, ShoppingBag } from 'lucide-vue-next'
</script>

<template>
  <ul class="steps w-full steps-horizontal">
    <li class="step step-primary">
      <span class="step-icon"><ShoppingBag class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Transaksi Di Buat</p>
        <p class="text-xs">Transaksi telah berhasil dibuat</p>
      </div>
    </li>
    <li class="step step-primary">
      <span class="step-icon"><CreditCard class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Pembayaran</p>
        <p class="text-xs">Silakan melakukan pembayaran</p>
      </div>
    </li>
    <li class="step">
      <span class="step-icon"><Loader class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Sedang Di Proses</p>
        <p class="text-xs">Pembelian sedang dalam proses</p>
      </div>
    </li>
    <li class="step">
      <span class="step-icon"><CheckCircle class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Transaksi Selesai</p>
        <p class="text-xs">Transaksi telah berhasil dilakukan</p>
      </div>
    </li>
  </ul>
</template>
