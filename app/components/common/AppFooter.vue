<template>
  <div>
    <NuxtLink to="/">
      <pi-house-line />
    </NuxtLink>
    <AppCommonDevtoolsThemeToggle />
  </div>
</template>

<script setup lang="ts">
import AppCommonDevtoolsThemeToggle from '~/components/common/DarkToggle.vue'
</script>
