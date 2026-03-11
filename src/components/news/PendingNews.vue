<script setup lang="ts">
const props = defineProps<{
  count?: number
}>()
</script>

<template>
  <section class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <div v-for="_ in count ?? 6" class="card bg-base-200 overflow-hidden">
      <div class="w-full aspect-video object-cover skeleton"></div>
      <div class="p-4 space-y-2">
        <h1 class="card-title text-transparent skeleton text-sm md:text-base line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt provident nihil voluptate
          praesentium. Ipsa dignissimos excepturi explicabo a nam facere numquam dicta rem saepe dolor vitae
          praesentium, magni sed.
        </h1>
        <p class="menu-title text-transparent skeleton p-0 text-xs md:text-sm line-clamp-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quo alias odio itaque quidem qui. Aspernatur,
          obcaecati? Ipsa tempora quae enim odit non unde? Repellendus dicta aspernatur reprehenderit tenetur adipisci
          vel, sint inventore sed quia id consectetur vero, ab earum.
        </p>
        <div class="flex justify-between">
          <span class="p-0 text-xs md:text-sm skeleton text-transparent">Lorem, ipsum dolor.</span>
          <span class="p-0 text-xs md:text-sm skeleton text-transparent">Lorem, ipsum.</span>
        </div>
      </div>
    </div>
  </section>
</template>
