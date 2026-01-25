<script setup lang="ts">
import type { GetItemParams, Item } from '@/types/item'
import Content from '@/components/content/Content.vue'
import ListProduct from '@/components/order-detail/ListProduct.vue'
import CheckOut from '@/components/order-detail/CheckOut.vue'
import Header from '@/components/order-detail/Header.vue'
import PaymentSelect from '@/components/order-detail/PaymentSelect.vue'
import { computed, ref } from 'vue'
import { useGetItem } from '@/hooks/useGetItems'
import { useRoute } from 'vue-router'
import PendingListProduct from '@/components/order-detail/PendingListProduct.vue'
import ErrorListProduct from '@/components/order-detail/ErrorListProduct.vue'

// state
const route = useRoute()
const provider = Array.isArray(route.params.slug) ? route.params.slug.join('') : route.params.slug
const phone = ref('')
const selectedItem = ref<null | Item>(null)
const selectedPayment = ref<null | string>(null)
const selectedTab = ref<'credit' | 'quota'>('credit')
const params = computed<GetItemParams>(() => ({
  filter_by_provider: provider,
  filter_by_credit: selectedTab.value,
  limit: "1000",
}))
const { data, isPending, isError, error, isFetching, refetch } = useGetItem(params)

// methods
const handleSelectItem = (value: Item) => {
  selectedItem.value = value
}
const handleSelectPayment = (value: string) => {
  selectedPayment.value = value
}
const handleChangeTab = (value: 'credit' | 'quota') => {
  selectedTab.value = value
}
</script>

<template>
  <Content>
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Header />
      <div class="col-span-1 lg:col-span-2 space-y-4">
        <div class="card p-4 bg-base-200 border border-base-content/20">
          <div class="space-y-2">
            <label for="phone" class="card-title">Masukan Nomer Ponsel</label>
            <input
              type="text"
              id="phone"
              class="input outline-none focus:border-primary"
              v-model="phone"
              placeholder="0838 - 0831"
            />
          </div>
        </div>
        <div class="card p-4 bg-base-200 border border-base-content/20 space-y-2">
          <h3 class="card-title">Pilih Produk</h3>
          <div class="space-x-4 mb-4">
            <button @click="handleChangeTab('credit')" class="btn btn-soft btn-primary" :class="[selectedTab == 'credit' && 'btn-active']">Pulsa</button>
            <button @click="handleChangeTab('quota')" class="btn btn-soft btn-primary" :class="[selectedTab == 'quota' && 'btn-active']">Kuota</button>
          </div>
          <PendingListProduct v-if="isPending"/>
          <ErrorListProduct 
            v-else-if="isError || data?.status != 200"
            :error="error"
            :is-fetching="isFetching"
            :refetch="refetch"
          />
          <ListProduct
            v-if="!isPending && !isError && data?.status == 200"
            :items="data?.data || []"
            :selected-item="selectedItem"
            @on-select="handleSelectItem"
          />
        </div>
        <PaymentSelect
          @on-select="handleSelectPayment"
          :item="selectedItem"
          :payment="selectedPayment"
        />
        <CheckOut
          :phone-number="phone"
          :selected-payment="selectedPayment"
          :selected-item="selectedItem"
        />
      </div>
    </section>
  </Content>
</template>
