<template>
  <div id="root" class="root">
    <AppGlobalScope />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { appName } from '~/constants'
import AppGlobalScope from '~/components/common/AppGlobalScope.vue'

useHead({ title: appName })
</script>

<style lang="scss">
.root {
  height: 100vh;
  overflow: hidden;
}
</style>
