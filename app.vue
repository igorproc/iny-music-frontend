<template>
  <div id="root" class="root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useNuxtApp } from 'nuxt/app';
import initializeApp from '~/store/init'

const nuxtApp = useNuxtApp()
await initializeApp(nuxtApp)
</script>
