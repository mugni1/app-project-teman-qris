<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
  import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
  import { data } from './data'

  // init
  const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay]
  const navigation = {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  }
</script>

<template>
  <section class="x-auto container pb-4">
    <Swiper
      direction="horizontal"
      :navigation="navigation"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      :space-between="0"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      loop
      class="rounded-lg overflow-hidden shadow-md border border-base-300"
    >
      <!-- SLIDE  -->
      <SwiperSlide v-for="(image, index) in data.images" :key="index">
        <img
          class="w-full aspect-[9/4] object-cover object-center"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          :src="image.url"
          :alt="'image' + index"
        />
      </SwiperSlide>

      <!-- CHEVRON PREV -->
      <button class="swiper-button-prev-custom">
        <ChevronLeft />
      </button>
      <!-- CHEVRON NEXT -->
      <button class="swiper-button-next-custom">
        <ChevronRight />
      </button>
    </Swiper>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .title {
    @apply text-base font-medium flex gap-2 items-center;
  }

  .description {
    @apply text-xs lg:text-sm font-normal line-clamp-2;
  }

  .swiper-button-next-custom {
    @apply absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full transition;
  }

  .swiper-button-prev-custom {
    @apply absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full transition;
  }
</style>

