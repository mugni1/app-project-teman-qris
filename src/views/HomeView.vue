<script setup lang="ts">
import Blog from '@/components/blog/Blog.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Content from '@/components/content/Content.vue'
import Description from '@/components/description/Description.vue'
import Provider from '@/components/provider/Provider.vue'
</script>

<template>
  <Content>
    <Carousel />
    <Provider />
    <Blog />
    <Description />
  </Content>
</template>
