<template>
  <v-container v-if="albumStore.currentPlaylist" fluid class="page-playlist d-flex flex-column">
    <div class="page-playlist__header">
      <PlaylistHeader :playlist="albumStore.currentPlaylist" />
    </div>
    <div class="page-playlist__song-list mt-5">
      <SongTile v-for="(song, index) in albumStore.currentPlaylist.songs" :key="song.songUrl" :song="song" :position="index + 1" class="mt-5" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { useAlbumStore } from '~/store/album';
import PlaylistHeader from '~/components/playlist/Header.vue'
import SongTile from '~/components/playlist/SongTile.vue'

const albumStore = useAlbumStore()
const route = useRoute()
if(route.params.shareToken[0]) {
  await albumStore.loadPlaylist(route.params.shareToken[0])
}
</script>

<style lang="scss">
.page-playlist {
  padding-bottom: 30px;
}
</style>