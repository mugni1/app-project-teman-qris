<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import Checkout from '@/components/games/Checkout.vue'
import CS from '@/components/games/CS.vue'
import Header from '@/components/games/Header.vue'
import Info from '@/components/games/Info.vue'
import Item, { type ItemNew } from '@/components/games/Item.vue'
import Payment from '@/components/games/Payment.vue'
import { ShoppingBag } from 'lucide-vue-next'
import { ref } from 'vue'
import { data } from '@/components/games/data'
import { useRoute } from 'vue-router'

// state
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('') : route.params.slug
const column1 = ref<undefined | string>()
const column2 = ref<undefined | string>()
const selectedPayment = ref<undefined | string>()
const selectedItem = ref<undefined | ItemNew>()

// methods
const handleChangeColumn1 = (value: string | undefined) => {
  column1.value = value
}
const handleChangeColumn2 = (value: string | undefined) => {
  column2.value = value
}
const handleChangePayment = (value: string | undefined) => {
  selectedPayment.value = value
}
const handleChangeItem = (value: ItemNew | undefined) => {
  selectedItem.value = value
}
</script>

<template>
  <Content class="space-y-4">
    <Header :title="data.title" :studio="data.studio" :cover-url="data.cover_url" :image-url="data.image_url" />
    <form action="" class="grid grid-cols-1 md:col-span-2 lg:grid-cols-3 gap-4">
      <section class="space-y-4 lg:col-span-2">
        <Info @change-column1="handleChangeColumn1" @change-column2="handleChangeColumn2" />
        <Item @change-item="handleChangeItem" />
        <Payment @change-payment="handleChangePayment" />
      </section>
      <section class="space-y-4">
        <CS />
        <Checkout :item="selectedItem" />
        <button type="submit" class="btn btn-primary w-full"><ShoppingBag class="size-5" /> Pesan Sekarang</button>
      </section>
    </form>
  </Content>
</template>
