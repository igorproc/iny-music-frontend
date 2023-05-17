<template>
  <div class="d-flex w-100 player-placeholder">
    <Player v-if="userStore.userIsAuth" />
    <PlayerUnregistredBlank v-else  />
  </div>
</template>

<script setup lang="ts">
import Player from '~/components/player/Player.vue'
import PlayerUnregistredBlank from "~/components/player/UnregistredBlank.vue";
import { useUserStore } from "~/store/user";

const userStore = useUserStore()
</script>

<style lang="scss">
.player-placeholder {
  position: fixed;
  bottom: 0;
  height: 100px;
}
</style>
