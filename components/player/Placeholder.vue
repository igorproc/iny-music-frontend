<template>
  <v-container fluid class="d-flex player-placeholder">
    <Player v-if="userStore.userIsAuth" class="h-100" />
    <PlayerUnregistredBlank v-else  />
  </v-container>
</template>

<script setup lang="ts">
import Player from '~/components/player/Player.vue'
import PlayerUnregistredBlank from "~/components/player/UnregistredBlank.vue";
import { useUserStore } from "~/store/user";

const userStore = useUserStore()
</script>
