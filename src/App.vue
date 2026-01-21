<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
</script>

<template>
  <Toaster :position="'top-right'" rich-colors />
  <Navbar />
  <RouterView />
</template>
