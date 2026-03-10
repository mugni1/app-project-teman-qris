<script setup lang="ts">
import Content from '../content/Content.vue'
</script>

<template>
  <Content class="space-y-4">
    <h1 class="card-title text-lg lg:text-3xl skeleton text-transparent">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni sint repellat ipsum impedit, minima quaerat
      corrupti repudiandae laborum consequuntur.
    </h1>
    <div class="flex justify-between">
      <span class="card-title text-xs md:text-sm text-transparent skeleton">Lorem, ipsum dolor.</span>
      <span class="card-title text-xs md:text-sm text-transparent skeleton">Lorem, ipsum.</span>
    </div>
    <div class="w-full card aspect-video skeleton"></div>
    <div class="space-y-4">
      <p class="skeleton text-sm lg:text-base text-transparent">Lorem ipsum dolor, sit amet consectetur.</p>
      <div class="space-y-1 text-sm lg:text-base">
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
      </div>
      <div class="space-y-1 text-sm lg:text-base">
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
      </div>
      <div class="space-y-1 text-sm lg:text-base">
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
        <p class="skeleton w-full text-transparent">Lorem ipsum dolor</p>
      </div>
    </div>
  </Content>
</template>
