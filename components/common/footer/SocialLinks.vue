<template>
  <div class="footer-social-links">
    <v-btn v-for="link in linkList" :key="link.id" :href="link.url" target="_blank" icon color="primary" class="mr-5">
      <v-icon :icon="link.icon" />
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const linkList = ref<any>([
  {
    id: 0,
    url: '/',
    icon: 'mdi-gmail',
  },
  {
    id: 1,
    url: 'https://t.me/pr0s1k',
    icon: 'mdi-send',
  },
  {
    id: 2,
    url: 'https://github.com/igorproc/iny-music-frontend',
    icon: 'mdi-github',
  },
])
</script>
