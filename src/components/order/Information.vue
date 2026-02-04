<script setup lang="ts">
const props = defineProps<{
  firstname: string | undefined
  phone: string | undefined
  pending: boolean
  product: string | undefined
  provider: string
}>()
</script>

<template>
  <div class="card bg-base-200 border border-base-300 p-4 grid grid-cols-12 gap-4">
    <div v-if="!pending" class="col-span-3 aspect-square bg-white overflow-hidden card">
      <img v-if="provider == 'xl'" src="/images/xl.webp" alt="image" />
      <img v-if="provider == 'axis'" src="/images/axis.webp" alt="image" />
      <img v-if="provider == 'telkomsel'" src="/images/telkomsel.webp" alt="image" />
      <img v-if="provider == 'byu'" src="/images/byu.webp" alt="image" />
      <img v-if="provider == 'indosat'" src="/images/indosat.webp" alt="image" />
      <img v-if="provider == 'three'" src="/images/three.webp" alt="image" />
      <img v-if="provider == 'smartfren'" src="/images/smartfren.webp" alt="image" />
    </div>
    <div v-else class="col-span-3 aspect-square overflow-hidden card skeleton"></div>
    <div class="col-span-9 md:space-y-2">
      <h3 v-if="!pending" class="font-semibold text-base">Informasi Transaksi</h3>
      <div v-else class="text-transparent">
        <span class="skeleton">Informasi Transaksi</span>
      </div>
      <table class="w-full text-xs md:text-sm border-separate border-spacing-y-1">
        <tbody v-if="!pending">
          <tr>
            <td class="w-5/12">Produk</td>
            <td class="line-clamp-1">: {{ product ?? '' }}</td>
          </tr>
          <tr>
            <td>No. Telepon</td>
            <td class="line-clamp-1">: {{ phone ?? '' }}</td>
          </tr>
          <tr>
            <td class="w-4/12">Nama</td>
            <td class="line-clamp-1">: {{ firstname ?? '' }}</td>
          </tr>
        </tbody>
        <tbody v-else class="text-transparent">
          <tr>
            <td class="w-5/12 skeleton">Produk</td>
          </tr>
          <tr>
            <td class="skeleton">No. Telepon</td>
          </tr>
          <tr>
            <td class="w-4/12 skeleton">Nama</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
