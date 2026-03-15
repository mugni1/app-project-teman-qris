<script setup lang="ts">
import type { OrderByUserLogin } from '@/types/order.type'
import Item from './Item.vue'

const props = defineProps<{
  data: OrderByUserLogin[]
}>()
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Item
      v-for="item in data"
      :image-url="item.item.category.image_url"
      :title="item.item.title"
      :status="item.status"
      :phone="item.destination"
      :trx-id="item.transaction_id"
    />
  </section>
</template>
