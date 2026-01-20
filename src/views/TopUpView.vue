<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import ListProduct from '@/components/order-detail/ListProduct.vue'
import CheckOut from '@/components/order-detail/CheckOut.vue'
import Header from '@/components/order-detail/Header.vue'
import PaymentSelect from '@/components/order-detail/PaymentSelect.vue'
import { ref } from 'vue'
import type { item } from '@/types/item.type'

const data = {
  products: [
    {
      id: 'iwqdi2134ijasd',
      title: 'Pulsa 20K',
      price: 20400,
      type: 'regular',
    },
    {
      id: 'iwqdi2134ijasas',
      title: 'Pulsa 10K',
      price: 10000,
      type: 'promo',
    },
    {
      id: 'iwqdi21as4ijasd',
      title: 'Pulsa 10K',
      price: 10500,
      type: 'regular',
    },
    {
      id: 'iwqdias134ijasd',
      title: 'Pulsa 20K',
      price: 20000,
      type: 'promo',
    },
    {
      id: 'iwq2342as1asd4ijasd',
      title: 'Pulsa 5K',
      price: 5200,
      type: 'regular',
    },
    {
      id: 'iw324dias1asd4ijasd',
      title: 'Pulsa 15K',
      price: 15200,
      type: 'regular',
    },
    {
      id: 'iwqdias1asasdijasd',
      title: 'Pulsa 25K',
      price: 25200,
      type: 'regular',
    },
    {
      id: 'iwqdias1a234ijasd',
      title: 'Pulsa 50K',
      price: 50100,
      type: 'regular',
    },
    {
      id: 'iwqdias1asd234ijasd',
      title: 'Pulsa 100K',
      price: 100100,
      type: 'regular',
    },
  ],
}

// state
const phone = ref('')
const selectedItem = ref<null | item>(null)
const selectedPayment = ref<null | string>(null)

// methods
const handleSelectItem = (value: item) => {
  selectedItem.value = value
}
const handleSelectPayment = (value: string) => {
  selectedPayment.value = value
}
</script>

<template>
  <Content>
    <img
      src="https://refrez.com/wp-content/uploads/2018/12/axis-data-owsem.jpg"
      alt="banner"
      class="w-full aspect-10/3 object-cover object-center rounded-lg mb-4 shadow-lg"
    />
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Header />
      <div class="col-span-1 lg:col-span-2 space-y-4">
        <div class="card">
          <div class="space-y-2">
            <label for="phone" class="card-title">Masukan Nomer Ponsel</label>
            <input type="text" id="phone" class="input" v-model="phone" placeholder="0838 - 0831" />
          </div>
        </div>
        <div class="card">
          <h3 class="card-title">Pilih Produk</h3>
          <div class="space-x-4">
            <button class="btn btn-soft btn-primary btn-active">Pulsa</button>
            <button class="btn btn-soft btn-primary">Kuota</button>
          </div>
          <ListProduct
            :items="data.products"
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

<style scoped>
@import '../assets/main.css';

.card {
  @apply p-4 bg-base-200 rounded-lg space-y-4 shadow-lg flex flex-col border border-base-content/20;
}

.card-title {
  @apply font-semibold;
}
</style>
