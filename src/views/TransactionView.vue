<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { useGetOrderByUserLogin } from '@/hooks/useGetOrderByUserLogin'

const { data, isPending } = useGetOrderByUserLogin()
</script>

<template>
  <Content>
    <span v-if="isPending">Bentar ya sedang ngambil dari api...</span>
    <span v-else>
      Anjay raw json {{ data }}
      <b class="text-primary">Besok Saya kerjain bagian ini, kalau udah nemu UI yang bagus :)</b>
    </span>
  </Content>
</template>
