<script setup lang="ts">
import { CheckCircle, CreditCard, Loader, ShoppingBag, XCircle } from 'lucide-vue-next'

const props = defineProps<{
  pending: boolean
  status: string
}>()
</script>

<template>
  <ul v-if="!pending" class="steps w-full steps-horizontal">
    <li class="step step-primary">
      <span class="step-icon"><ShoppingBag class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Transaksi Dibuat</p>
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
    <li :class="['step', status != 'pending' && 'step-primary']">
      <span class="step-icon"><Loader class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Sedang Diproses</p>
        <p class="text-xs">Pembelian sedang dalam proses</p>
      </div>
    </li>
    <li
      v-if="status != 'cancelled' && status != 'failed' && status != 'expired'"
      :class="['step', status == 'paid' && 'step-primary']"
    >
      <span class="step-icon"><CheckCircle class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Transaksi Selesai</p>
        <p class="text-xs">Transaksi telah berhasil dilakukan</p>
      </div>
    </li>
    <li v-if="status == 'cancelled'" :class="['step', status == 'cancelled' && 'step-primary']">
      <span class="step-icon"><XCircle class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Transaksi Dibatalkan</p>
        <p class="text-xs">Transaksi dibatalkan oleh sistem</p>
      </div>
    </li>
    <li v-if="status == 'failed'" :class="['step', status == 'failed' && 'step-primary']">
      <span class="step-icon"><XCircle class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Transaksi Gagal</p>
        <p class="text-xs">Transaksi gagal diselesaikan</p>
      </div>
    </li>
    <li v-if="status == 'expired'" :class="['step', status == 'expired' && 'step-primary']">
      <span class="step-icon"><XCircle class="size-4" /> </span>
      <div class="hidden md:block">
        <p class="font-semibold text-base">Transaksi Kadaluwarsa</p>
        <p class="text-xs">Transaksi gagal diselesaikan</p>
      </div>
    </li>
  </ul>

  <ul v-else class="steps w-full steps-horizontal text-transparent">
    <li class="step">
      <span class="step-icon skeleton"></span>
      <div class="hidden md:flex items-center justify-center flex-col gap-1">
        <p class="font-semibold text-base skeleton">Transaksi Transak</p>
        <p class="text-xs skeleton">Transaksi gagal diselesaikan</p>
      </div>
    </li>
    <li class="step">
      <span class="step-icon skeleton"></span>
      <div class="hidden md:flex items-center justify-center flex-col gap-1">
        <p class="font-semibold text-base skeleton">Transaksi Transak</p>
        <p class="text-xs skeleton">Transaksi gagal diselesaikan</p>
      </div>
    </li>
    <li class="step">
      <span class="step-icon skeleton"></span>
      <div class="hidden md:flex items-center justify-center flex-col gap-1">
        <p class="font-semibold text-base skeleton">Transaksi Transaksi</p>
        <p class="text-xs skeleton">Transaksi gagal diselesaikannn</p>
      </div>
    </li>
    <li class="step">
      <span class="step-icon skeleton"></span>
      <div class="hidden md:flex items-center justify-center flex-col gap-1">
        <p class="font-semibold text-base skeleton">Transaksi Transak</p>
        <p class="text-xs skeleton">Transaksi gagal diselesaikan</p>
      </div>
    </li>
  </ul>
</template>
