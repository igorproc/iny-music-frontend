<template>
  <div id="root" class="root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { appName } from '~/constants'

useHead({ title: appName, })
</script>

<style lang="scss">
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  background: $background-color;
  color: $primary-color;
}
</style>
