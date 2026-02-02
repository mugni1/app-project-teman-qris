<script setup lang="ts">
import { motion } from 'motion-v'
import { RouterLink } from 'vue-router'
import { data } from './data'
import Cookies from 'js-cookie'

const props = defineProps<{
  active: boolean
}>()
const emits = defineEmits<{
  (e: 'changeActive', value: boolean): void
}>()

const token = Cookies.get('token')
const handleChange = () => {
  emits('changeActive', !props.active)
}
</script>

<template>
  <section
    @click.self="handleChange"
    :class="[
      'fixed inset-0 z-40 backdrop-blur-sm transition-all duration-200 px-4',
      props.active ? 'visible' : 'invisible',
    ]"
  >
    <motion.div
      :initial="{ opacity: 0, y: 200 }"
      :animate="{ opacity: active ? 1 : 0, y: active ? 0 : 200 }"
      :transition="{ duration: 0.2 }"
      class="container card bg-base-200 mt-20 text-accent border border-primary space-y-4 pt-4 px-4"
    >
      <RouterLink
        v-for="item in data"
        v-show="!item.requireAuth && item.name != 'login'"
        :to="item.link"
        class="btn btn-ghost btn-primary btn-sm"
      >
        <component :is="item.icon" class="size-4" /> {{ item.title }}
      </RouterLink>
      <RouterLink
        v-for="item in data"
        v-show="item.requireAuth && token"
        :to="item.link"
        class="btn btn-ghost btn-primary btn-sm"
      >
        <component :is="item.icon" class="size-4" /> {{ item.title }}
      </RouterLink>
      <RouterLink
        v-for="item in data"
        v-show="!item.requireAuth && item.name == 'login' && !token"
        :to="item.link"
        class="btn btn-ghost btn-primary btn-sm"
      >
        <component :is="item.icon" class="size-4" /> {{ item.title }}
      </RouterLink>
    </motion.div>
  </section>
</template>
