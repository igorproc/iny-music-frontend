<template>
  <main class="app-default-layout">
    <slot />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import AppFooter from '~/components/common/AppFooter.vue'
</script>
