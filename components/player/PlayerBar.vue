<template>
  <v-row class="app-player" align="center">
    <v-col cols="2">
      <PlayerSongTile v-if="currentSong" :song="currentSong" />
    </v-col>
    <v-spacer />
    <v-col cols="4">
      <PlayerControls v-if="currentSong" :song="currentSong" />
    </v-col>
    <v-spacer />
    <v-col cols="2">
      <PlayerActions v-if="currentSong" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import PlayerSongTile from '~/components/player/SongTile.vue'
import PlayerControls from '~/components/player/PlayerControls.vue'
import PlayerActions from '~/components/player/Actions.vue'
import { useSongStore } from '~/store/song'

const songStore = useSongStore()
const currentSong = computed(() => {
  if (songStore.currentSongId && songStore.songQueue) return songStore.songQueue.songs
  return false
})
</script>

<style lang="scss">
.app-player {
  background-color: #000;
}
</style>
