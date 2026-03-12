<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useGetCarousel } from '@/hooks/useGetCarousel'
import EmptyCard from '../global/EmptyCard.vue'
import ErrorCard from '../global/ErrorCard.vue'

// init carousel
const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay]
const navigation = {
  nextEl: '.swiper-button-next-custom',
  prevEl: '.swiper-button-prev-custom',
}

// hooks
const { data, isPending, isRefetching, refetch } = useGetCarousel()
</script>

<template>
  <!-- pending  -->
  <div v-if="isPending">
    <div class="w-full aspect-9/4 skeleton"></div>
  </div>

  <!-- empty  -->
  <EmptyCard
    v-if="!isPending && data && data.data && data.data.length < 1 && data.status == 200"
    title="Tidak ada banner info."
  />

  <!-- error  -->
  <ErrorCard
    v-if="!isPending && data && data.status != 200"
    :message="data.message"
    :status="data.status"
    :is-refetching="isRefetching"
    @refetch="refetch()"
  />

  <!-- list  -->
  <Swiper
    v-if="!isPending && data && data.data && data.data.length > 0 && data.status == 200"
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
    class="card overflow-hidden shadow-md border border-base-300"
  >
    <SwiperSlide v-for="(item, index) in data?.data || []" :key="index">
      <img
        class="w-full aspect-9/4 object-cover object-center"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        :src="item.image_url"
        :alt="'image' + index"
      />
    </SwiperSlide>
    <button class="swiper-button-prev-custom">
      <ChevronLeft />
    </button>
    <button class="swiper-button-next-custom">
      <ChevronRight />
    </button>
  </Swiper>
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
