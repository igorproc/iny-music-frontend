<template>
  <div v-if="userStore.isAuth" class="app-player" />
  <AppUnregisterBlank v-else class="app-player-placeholder" />
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
import AppUnregisterBlank from '~/components/player/AppUnregisterBlank.vue'

const userStore = useUserStore()
</script>

<style lang="scss">
.app-player-placeholder {
  height: 98px;
}
</style>
