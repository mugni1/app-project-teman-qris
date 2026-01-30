<script setup lang="ts">
import Content from '@/components/content/Content.vue';
import IconCreditCard from '@/icons/IconCreditCard.vue';
import { CheckCircle, CreditCard, DownloadCloud, Info, Loader, SearchCheckIcon, ShoppingBag } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const id = route.params.id as string
const checked = ref(false)
</script>

<template>
    <div class="w-full py-8 px-4 bg-warning mb-4 flex flex-col items-center justify-center">
        <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12"/> 
        <h1 class="text-center font-bold text-2xl md:text-3xl lg:text-4xl">Harap Selesaikan Pembayaran</h1>
        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, pariatur?</p>
    </div>
    <Content>
        <div class="space-y-8">
            <ul class="steps w-full steps-horizontal">
                <li class="step step-primary">
                    <span class="step-icon"><ShoppingBag class="size-4"/> </span>
                    <div class="hidden md:block">
                        <p class="font-semibold text-base">Transaksi Di Buat</p>
                        <p class="text-xs">Transaksi telah berhasil dibuat</p>
                    </div>
                </li>
                <li class="step step-primary">
                    <span class="step-icon"><CreditCard class="size-4"/> </span>
                    <div class="hidden md:block">
                        <p class="font-semibold text-base">Pembayaran</p>
                        <p class="text-xs">Silakan melakukan pembayaran</p>
                    </div>
                </li>
                <li class="step">
                    <span class="step-icon"><Loader class="size-4"/> </span>
                    <div class="hidden md:block">
                        <p class="font-semibold text-base">Sedang Di Proses</p>
                        <p class="text-xs">Pembelian sedang dalam proses</p>
                    </div>
                </li>
                <li class="step">
                    <span class="step-icon"><CheckCircle class="size-4"/> </span>
                    <div class="hidden md:block">
                        <p class="font-semibold text-base">Transaksi Selesai</p>
                        <p class="text-xs">Transaksi telah berhasil dilakukan</p>
                    </div>
                </li>
            </ul>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section class="space-y-4">
                    <div class="card bg-base-200 border border-base-300 p-4 grid grid-cols-12 gap-4">
                        <div class="col-span-3 aspect-square bg-white overflow-hidden card">
                            <img src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Faxis-799858.png&w=1920&q=75" alt="">
                        </div>
                        <div class="col-span-9 space-y-2">
                        <h3 class="font-semibold">Informasi Transaksi</h3>
                        <table class="w-full text-sm">
                            <tr>
                                <td class="w-4/12">Nama</td>
                                <td class="line-clamp-1">: Ilham Gaming</td>
                            </tr>
                            <tr>
                                <td>No. Telepon</td>
                                <td class="line-clamp-1">: 081286151253</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td class="line-clamp-1">: ilhamgaming@gmail.com</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow overflow-visible space-y-2" @click="checked = !checked">
                        <input type="radio" name="my-accordion-2" :checked="checked" />
                        <div class="collapse-title font-semibold bg-base-200 border border-base-300 card">Rincian Pembayaran</div>
                        <div v-show="checked" class="collapse-content text-sm bg-base-200 border border-base-300 card pt-4 space-y-4">
                            <div class="flex justify-between">
                                <span>Harga</span>
                                <span>Rp 1.150</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Jumlah</span>
                                <span>x1</span>
                            </div>
                            <div class="w-full bg-base-300 h-[2px]"></div>
                            <div class="flex justify-between">
                                <span>Subtotal</span>
                                <span>Rp 1.150</span>
                            </div>
                        </div>
                    </div>
                    <div class=" border-2 border-primary  bg-base-200 p-4 card">
                        <div class="flex justify-between w-full font-semibold text-lg text-primary">
                            <span>Total Pembayaran</span>
                            <span>Rp 1.150</span>
                        </div>
                    </div>
                </section>
                <section class="space-y-4">
                    <div class="card">
                        <h3>Metode Pembayaran</h3>
                        <p class="font-semibold">QRIS (All Payment)</p>
                    </div>
                    <div class="card">
                        <table>
                            <tr>
                                <td class="w-5/12">ID Transaksi</td>
                                <td>: MUGN-39787IIHUA77</td>
                            </tr>
                            <tr>
                                <td>Status Transaksi</td>
                                <td>: 
                                    <span class="badge badge-warning">Pending</span>
                                    <!-- <span class="badge badge-error">Cancelled</span>
                                    <span class="badge badge-error">Failed</span>
                                    <span class="badge badge-success">Paid</span> -->
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="card space-y-1">
                        <img src="https://qris.pw/public/qr/qr_1769777958_16000.png" class="w-6/12 lg:w-4/12" alt="">
                        <i class="text-xs text-info flex items-center gap-1"><Info class="size-4"/> Scan QRIS for complete payment</i>
                    </div>
                    <div class="card space-y-4">
                        <a
                            href="https://qris.pw/public/qr/qr_1769777958_16000.png"
                            target="_blank"
                            download="QRIS.png"
                            class="btn btn-secondary w-full"
                        >
                            <DownloadCloud class="size-5" /> Unduh QRIS
                        </a>
                        <button class="btn btn-primary w-full"><SearchCheckIcon class="size-5"/> Cek Transaksi</button>
                    </div>
                </section>
            </div>
        </div>
    </Content>
</template>