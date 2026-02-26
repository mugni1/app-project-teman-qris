<script setup lang="ts">
import IconCreditCard from '@/icons/IconCreditCard.vue'

const props = defineProps<{
  pending: boolean
  status: string
}>()
</script>

<template>
  <div v-if="pending" class="w-full min-h-[30vh] md:min-h-[40vh] skeleton mb-4 rounded-none"></div>
  <div
    v-if="!pending && status == 'pending'"
    class="w-full min-h-[30vh] md:min-h-[40vh] px-4 bg-warning mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center text-white font-bold text-xl md:text-3xl lg:text-4xl">Harap Selesaikan Pembayaran</h1>
    <p class="text-center text-white md:text-base text-sm">
      Silakan selesaikan pembayaran sesuai dengan metode yang Anda pilih. Pesanan akan diproses secara otomatis setelah
      pembayaran berhasil kami terima.
    </p>
  </div>
  <div
    v-if="(!pending && status == 'waiting') || (!pending && status == 'processing')"
    class="w-full min-h-[30vh] md:min-h-[40vh] px-4 bg-info mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center text-white font-bold text-xl md:text-3xl lg:text-4xl">Pesanan Sedang Diproses</h1>
    <p class="text-center text-white md:text-base text-sm">
      Pembayaran Anda sedang kami verifikasi atau pesanan sedang diproses oleh sistem. Mohon tunggu beberapa saat dan
      jangan melakukan pembayaran ulang.
    </p>
  </div>
  <div
    v-if="(!pending && status == 'paid') || (!pending && status == 'success')"
    class="w-full min-h-[30vh] md:min-h-[40vh] px-4 bg-success mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center text-white font-bold text-xl md:text-3xl lg:text-4xl">Transaksi Sukses Dibayar</h1>
    <p class="text-center text-white md:text-base text-sm">
      Pembayaran berhasil dikonfirmasi. Pesanan Anda sedang atau telah diproses. Silakan cek detail transaksi untuk
      informasi lebih lanjut.
    </p>
  </div>
  <div
    v-if="!pending && status == 'cancelled'"
    class="w-full min-h-[30vh] md:min-h-[40vh] px-4 bg-error mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center text-white font-bold text-xl md:text-3xl lg:text-4xl">Transaksi Dibatalkan Oleh Sistem</h1>
    <p class="text-center text-white md:text-base text-sm">
      Transaksi dibatalkan secara otomatis oleh sistem karena pembayaran tidak diselesaikan atau terjadi kendala
      tertentu. Silakan lakukan pemesanan ulang jika diperlukan.
    </p>
  </div>
  <div
    v-if="!pending && status == 'expired'"
    class="w-full min-h-[30vh] md:min-h-[40vh] px-4 bg-error mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center text-white font-bold text-xl md:text-3xl lg:text-4xl">Transaksi Telah Kadaluwarsa</h1>
    <p class="text-center text-white md:text-base text-sm">
      Batas waktu pembayaran telah habis. Untuk melanjutkan, silakan buat pesanan baru dan segera selesaikan pembayaran
      sebelum waktu berakhir.
    </p>
  </div>
  <div
    v-if="(!pending && status == 'failed') || (!pending && status == 'error')"
    class="w-full min-h-[30vh] md:min-h-[40vh] px-4 bg-error mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center text-white font-bold text-xl md:text-3xl lg:text-4xl">Transaksi Gagal</h1>
    <p class="text-center text-white md:text-base text-sm">
      Terjadi kendala saat memproses transaksi Anda. Pastikan saldo atau metode pembayaran mencukupi dan coba kembali
      beberapa saat lagi.
    </p>
  </div>
</template>
