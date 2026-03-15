<script setup lang="ts">
import Content from '../global/Content.vue'
</script>

<template>
  <section>
    <div class="w-full min-h-[40vh] skeleton mb-4 rounded-none"></div>
    <Content>
      <section class="space-y-8">
        <!-- steps  -->
        <ul class="steps w-full steps-horizontal text-transparent">
          <li class="step">
            <span class="step-icon skeleton"></span>
            <div class="hidden md:flex items-center justify-center flex-col gap-1">
              <p class="font-semibold text-base skeleton">Transaksi Transak</p>
              <p class="text-xs skeleton">Transaksi gagal diselesaikan</p>
            </div>
          </li>
          <li class="step">
            <span class="step-icon skeleton"></span>
            <div class="hidden md:flex items-center justify-center flex-col gap-1">
              <p class="font-semibold text-base skeleton">Transaksi Transak</p>
              <p class="text-xs skeleton">Transaksi gagal diselesaikan</p>
            </div>
          </li>
          <li class="step">
            <span class="step-icon skeleton"></span>
            <div class="hidden md:flex items-center justify-center flex-col gap-1">
              <p class="font-semibold text-base skeleton">Transaksi Transaksi</p>
              <p class="text-xs skeleton">Transaksi gagal diselesaikannn</p>
            </div>
          </li>
          <li class="step">
            <span class="step-icon skeleton"></span>
            <div class="hidden md:flex items-center justify-center flex-col gap-1">
              <p class="font-semibold text-base skeleton">Transaksi Transak</p>
              <p class="text-xs skeleton">Transaksi gagal diselesaikan</p>
            </div>
          </li>
        </ul>

        <!-- wrapped content  -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section class="space-y-4">
            <!-- time  -->
            <div class="badge skeleton text-transparent">Fotmated time time time time</div>

            <!-- information -->
            <div class="card bg-base-200 border border-base-300 p-4 grid grid-cols-12 gap-4">
              <div class="col-span-3 aspect-square overflow-hidden card skeleton"></div>
              <div class="col-span-9 space-y-2">
                <div class="text-transparent">
                  <span class="skeleton">Informasi Transaksi</span>
                </div>
                <div class="flex flex-col gap-1 text-xs md:text-sm">
                  <div class="w-full flex justify-between">
                    <p class="skeleton text-transparent">Produk :</p>
                    <p class="skeleton text-transparent">Name Produk</p>
                  </div>
                  <div class="w-full flex justify-between">
                    <p class="skeleton text-transparent">Id Server:</p>
                    <p class="skeleton text-transparent">Contoh id server</p>
                  </div>
                  <div class="w-full flex justify-between">
                    <p class="skeleton text-transparent">Nama :</p>
                    <p class="skeleton text-transparent">Contoh nama</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- payment detail  -->
            <div class="card bg-base-200 border border-base-300 skeleton h-15"></div>

            <!-- payment total  -->
            <div class="card bg-base-200 border border-base-300 skeleton h-15"></div>
          </section>
          <section class="space-y-4">
            <!-- methode header  -->
            <div class="card text-base space-y-1 lg:mt-10 text-transparent">
              <span class="skeleton w-fit">Metode Pembayaran</span>
              <span class="font-semibold skeleton w-fit">QRIS (All Payment)</span>
            </div>
            <div class="card text-sm">
              <table class="border-separate border-spacing-y-2">
                <tbody class="text-transparent">
                  <tr>
                    <td class="w-4/12 skeleton">ID Transaksi</td>
                  </tr>
                  <tr>
                    <td class="skeleton">Status</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- qris  -->
            <div class="card space-y-1">
              <div class="skeleton w-6/12 lg:w-4/12 aspect-square"></div>
            </div>

            <!-- methode footer  -->
            <div class="card space-y-4">
              <div class="w-full h-10 skeleton"></div>
              <div class="w-full h-10 skeleton"></div>
            </div>
          </section>
        </div>
      </section>
    </Content>
  </section>
</template>
