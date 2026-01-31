<script setup lang="ts">
import { CloudLightning, LucideSquareSplitVertical } from 'lucide-vue-next'
</script>

<template>
  <div class="col-span-1">
    <div class="card bg-base-200 shadow-md overflow-hidden border border-base-content/20">
      <figure>
        <img
          v-if="$route.params.slug == 'axis'"
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Faxis-799858.png&w=1920&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center"
        />
        <img
          v-if="$route.params.slug == 'xl'"
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fxl-771707.png&w=384&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center"
        />

        <img
          v-if="$route.params.slug == 'indosat'"
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Findosat-115264.png&w=384&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center bg-white"
        />

        <img
          v-if="$route.params.slug == 'three'"
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fthree-731863.png&w=384&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center"
        />

        <img
          v-if="$route.params.slug == 'smartfren'"
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fsmartfren-366422.png&w=384&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center"
        />

        <img
          v-if="$route.params.slug == 'telkomsel'"
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Ftelkomsel-982486.png&w=384&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center"
        />

        <img
          v-if="$route.params.slug == 'byu'"
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fbyu-339017.png&w=384&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center"
        />
      </figure>
      <div class="p-4 gap-4 flex items-center">
        <span class="row"> <CloudLightning class="size-5" /> Proses Cepat </span>
        <span class="row"> <LucideSquareSplitVertical class="size-5" /> Pembayaran Aman </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.row {
  @apply flex items-center gap-1 font-medium text-sm;
}
</style>
