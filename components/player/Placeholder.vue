<template>
  <div class="d-flex align-end w-100 player-placeholder">
    <Player v-if="isAuth" />
    <PlayerUnregistredBlank v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import Player from '~/components/player/Player.vue'
import PlayerUnregistredBlank from "~/components/player/UnregistredBlank.vue";

const isAuth: Ref<boolean> = ref(false)
</script>

<style lang="scss">
.player-placeholder {
  position: fixed;
  bottom: 0;
  height: 100px;
}
</style>
