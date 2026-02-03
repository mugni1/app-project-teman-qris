<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import Item from '@/components/transaction/Item.vue'
import ItemNotFound from '@/components/transaction/ItemNotFound.vue'
import ItemSkeleton from '@/components/transaction/ItemSkeleton.vue'
import { useGetOrderByUserLogin } from '@/hooks/useGetOrderByUserLogin'
import { ListEndIcon } from 'lucide-vue-next'

// state
const { data, isPending } = useGetOrderByUserLogin()
</script>

<template>
  <Content>
    <h1 class="card-title mb-4">
      <ListEndIcon class="size-6" />
      Riwayat Transaksi Anda
    </h1>
    <div class="grid grid-cols-2 gap-4">
      <ItemSkeleton v-if="isPending" v-for="_ in 10" />
      <Item
        v-else-if="!isPending && data && data.data && data.data.length > 1"
        v-for="item in data.data"
        :title="item.item.title"
        :status="item.status"
        :phone="item.phone_number"
        :trx-id="item.transaction_id"
      />
      <ItemNotFound v-else />
    </div>
  </Content>
</template>
