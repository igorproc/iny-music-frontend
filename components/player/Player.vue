<template>
  <v-row class="app-player" align="center">
    <v-col cols="2">
      <PlayerSongTile />
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
import PlayerSongTile from "~/components/player/SongTile.vue"

</script>

<style lang="scss">
.app-player {
  background-color: #000;
}
</style>