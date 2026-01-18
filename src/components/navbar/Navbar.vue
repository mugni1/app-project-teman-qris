<script setup lang="ts">
import Thema from "../thema/Thema.vue"
import { Menu } from 'lucide-vue-next';
</script>

<template>
    <header class="w-full border-b border-base-300 py-2 bg-base-100">
        <nav class="container mx-auto px-4 flex items-center justify-between">
            <b>MYBRAND</b>
            <div class="space-x-2">
                <Thema />
                <button class="btn btn-sm btn-square">
                    <Menu class="size-4.5" />
                </button>
            </div>
        </nav>
    </header>
</template>