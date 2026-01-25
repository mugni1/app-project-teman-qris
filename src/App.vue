<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <Toaster :position="'top-right'" rich-colors />
  <Navbar v-if="!$route.name?.toString().startsWith('auth') && $route.name != 'not_found'" />
  <RouterView />
  <Footer v-if="!$route.name?.toString().startsWith('auth') && $route.name != 'not_found'" />
</template>
