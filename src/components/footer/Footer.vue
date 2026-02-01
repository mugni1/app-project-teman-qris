<script setup lang="ts">
import IconOmbak from '@/icons/IconOmbak.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <IconOmbak class="text-base-300" />
  <footer class="bg-base-300 w-full transition-all delay-150 duration-300 ease-in-out">
    <section class="container mx-auto p-4 pb-8 space-y-8">
      <RouterLink to="/">
        <img src="https://topup.ebelanja.id/logo/logo-color.svg" alt="brand" class="h-12" />
      </RouterLink>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div class="space-y-4 col-span-2 md:col-span-3 lg:col-span-2 w-full">
          <p class="text-base text-base-content/80">
            No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24 Jam dengan
            channel pembayaran terlengkap Indonesia
          </p>
          <div class="flex gap-8">
            <!-- <img
              class="size-8"
              src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Ff6a1857c-6ced-41ab-99fb-2340b2dbe09c.webp&w=32&q=75"
              alt="facebook"
            />
            <img
              class="size-8"
              src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F509573ad-c36d-467e-884a-72a984a95330.webp&w=32&q=75"
              alt="instagram"
            />
            <img
              class="size-8"
              src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Ff233c760-d50d-40f6-a425-800559888c18.webp&w=32&q=75"
              alt="telegram"
            /> -->
          </div>
        </div>
        <div class="space-y-2 col-span-1 w-full">
          <p class="font-semibold text-lg text-primary">Kontak Saya</p>
          <div class="flex flex-col text-sm md:text-base font-normal text-base-content/80">
            <a href="">Email</a>
            <a href="">Telegram</a>
            <a href="">WhatsApp</a>
          </div>
        </div>
        <div class="space-y-2 col-span-1 w-full">
          <p class="font-semibold text-lg text-primary">Site Map</p>
          <div class="flex flex-col text-sm md:text-base font-normal text-base-content/80">
            <a href="">Contact Us</a>
            <a href="">Reviews</a>
            <a href="">Term & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div class="space-y-2 col-span-1 w-full">
          <p class="font-semibold text-lg text-primary">Support</p>
          <div class="flex flex-col text-sm md:text-base font-normal text-base-content/80">
            <a href="">Email</a>
            <a href="">Telegram</a>
            <a href="">WhatsApp</a>
          </div>
        </div>
      </div>
      <div class="h-px w-full bg-base-content/70"></div>
      <p class="text-center text-base-content/70">
        Copyright &copy; {{ new Date().getFullYear() }}. All Rights Reserved.
      </p>
    </section>
  </footer>
</template>
