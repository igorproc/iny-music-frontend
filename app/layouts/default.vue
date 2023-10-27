<template>
  <main class="px-10 py-20 text-center">
    <slot />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
  import AppFooter from '~/components/common/Footer.vue'
</script>
