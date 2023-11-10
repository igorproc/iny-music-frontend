<template>
  <AppGlobalScope />
  <div id="root" class="root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { appName } from '~/constants'
import AppGlobalScope from '~/components/common/AppGlobalScope.vue'

useHead({ title: appName, })
</script>

<style lang="scss">
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

.root {
  height: 100vh;
  overflow: hidden;
}
</style>
