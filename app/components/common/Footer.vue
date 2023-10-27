<template>
  <div text="xl gray4" flex="~ gap3" justify-center m-5>
    <NuxtLink i-carbon-campsite to="/" />
    <AppCommonDevtoolsThemeToggle v-if="isDevMode" />
  </div>
</template>

<script setup lang="ts">
  import AppCommonDevtoolsThemeToggle from '~/components/common/DarkToggle.vue'

  const isDevMode = process.env.BUILD_MODE !== 'production'
</script>
