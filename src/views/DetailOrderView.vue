<script setup lang="ts">
import Content from '@/components/content/Content.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id as string
 
</script>

<template>
    <Content>
        <h1>Anjay mabar bro {{ id }}</h1>
    </Content>
</template>