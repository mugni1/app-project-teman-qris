<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import { startsWith } from 'zod'
</script>

<template>
  <Toaster :position="'top-right'" rich-colors />
  <Navbar v-if="!$route.name?.toString().startsWith('auth')" />
  <RouterView />
</template>
