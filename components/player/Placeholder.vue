<template>
  <div class="v-container--fluid d-flex player-placeholder h-100">
    <ClientOnly v-if="userStore.userIsAuth">
      <Player />
    </ClientOnly>
    <PlayerUnregistredBlank v-else />
  </div>
</template>

<script setup lang="ts">
import Player from '~/components/player/PlayerBar.vue'
import PlayerUnregistredBlank from '~/components/player/unregistred/Blank.vue'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
</script>
