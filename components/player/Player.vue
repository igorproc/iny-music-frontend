<template>
  <v-row class="app-player">
    <v-col cols="3">
      <PlayerSongTile :song="songStore.currentSong" />
    </v-col>
    <v-spacer />
    <v-col cols="6">
      palyer
    </v-col>
    <v-spacer />
    <v-col cols="2">
      playing options
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useSongStore } from "~/store/song/index"
import PlayerSongTile from "~/components/player/SongTile.vue"

const songStore = useSongStore()
onMounted(async() => await songStore.getSongById(2))
</script>

<style lang="scss">
.app-player {
  background-color: #000;
}
</style>