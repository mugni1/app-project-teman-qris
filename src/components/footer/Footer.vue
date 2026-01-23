<script setup lang="ts">
import { FacebookIcon, InstagramIcon } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-base-200 w-full mt-4">
    <section class="container mx-auto p-4 space-y-4">
      <h2 class="font-bold text-2xl pt-2">Brand</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="space-y-2">
          <p class="font-semibold text-lg">Sosial Media</p>
          <div class="flex gap-6 text-base-content/80">
            <InstagramIcon class="size-8" />
            <FacebookIcon class="size-8" />
          </div>
        </div>
        <div class="space-y-2">
          <p class="font-semibold text-lg">Kontak Saya</p>
          <div class="flex flex-col font-normal text-base-content/80">
            <a href="">Email</a>
            <a href="">Telegram</a>
            <a href="">WhatsApp</a>
          </div>
        </div>
        <div class="col-span-2 md:col-span-1">
          <div class="flex justify-center flex-wrap">
            <img class="size-30" src="https://topup.ebelanja.id/payment-method/qris.svg" alt="" />
            <img class="size-30" src="https://topup.ebelanja.id/payment-method/gopay.svg" alt="" />
            <img
              class="size-30"
              src="https://topup.ebelanja.id/payment-method/shopee-pay.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="h-[1px] w-full bg-base-content"></div>
      <p class="text-center">
        Copyright &copy; {{ new Date().getFullYear() }}. All Rights Reserved.
      </p>
    </section>
  </footer>
</template>
