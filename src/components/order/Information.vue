<script setup lang="ts">
const props = defineProps<{
  fullname: string | undefined
  phone: string | undefined
  email: string | undefined
  pending: boolean
  product: string | undefined
}>()
</script>

<template>
  <div class="card bg-base-200 border border-base-300 p-4 grid grid-cols-12 gap-4">
    <div class="col-span-3 aspect-square bg-white overflow-hidden card">
      <img
        src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Faxis-799858.png&w=1920&q=75"
        alt=""
      />
    </div>
    <div class="col-span-9 space-y-2">
      <h3 class="font-semibold text-base">Informasi Transaksi</h3>
      <table class="w-full text-xs md:text-sm border-separate border-spacing-y-1">
        <tbody>
          <tr>
            <td class="w-4/12">Produk</td>
            <td v-if="!pending" class="line-clamp-1">: {{ product ?? '' }}</td>
            <td v-else class="flex items-center gap-2">
              :
              <div class="skeleton h-5 w-full"></div>
            </td>
          </tr>
          <tr>
            <td>No. Telepon</td>
            <td v-if="!pending" class="line-clamp-1">: {{ phone ?? '' }}</td>
            <td v-else class="flex items-center gap-2">
              :
              <div class="skeleton h-5 w-full"></div>
            </td>
          </tr>
          <tr>
            <td class="w-4/12">Nama</td>
            <td v-if="!pending" class="line-clamp-1">: {{ fullname ?? '' }}</td>
            <td v-else class="flex items-center gap-2">
              :
              <div class="skeleton h-5 w-full"></div>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td v-if="!pending" class="line-clamp-1">: {{ email ?? '' }}</td>
            <td v-else class="flex items-center gap-2">
              :
              <div class="skeleton h-5 w-full"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
