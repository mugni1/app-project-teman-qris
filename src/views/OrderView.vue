<script setup lang="ts">
import Content from '@/components/global/Content.vue'
import EmptyCard from '@/components/global/EmptyCard.vue'
import ErrorCard from '@/components/global/ErrorCard.vue'
import Title from '@/components/global/Title.vue'
import OrderList from '@/components/order/OrderList.vue'
import OrderPending from '@/components/order/OrderPending.vue'
import { useGetOrderByUserLogin } from '@/hooks/useGetOrderByUserLogin'
import { ListEndIcon } from 'lucide-vue-next'

// state
const { data, isPending, refetch, isRefetching } = useGetOrderByUserLogin()
</script>

<template>
  <Content class="space-y-4">
    <!-- title  -->
    <Title :icon="ListEndIcon" title="RIWAYAT TRANSAKSI" />

    <!-- pending  -->
    <OrderPending v-if="isPending" />

    <!-- list  -->
    <OrderList v-if="!isPending && data && data.data && data.data.length > 0 && data.status == 200" :data="data.data" />

    <!-- empty  -->
    <EmptyCard
      v-if="!isPending && data && data.data && data.data.length < 1 && data.status == 200"
      title="Belum ada transaksi."
    />

    <!-- error  -->
    <ErrorCard
      v-if="!isPending && data && data.status != 200"
      :is-refetching="isRefetching"
      :message="data.message"
      :status="data.status"
      @refetch="refetch"
    />
  </Content>
</template>
