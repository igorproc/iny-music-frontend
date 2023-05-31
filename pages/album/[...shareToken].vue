<template>
  <v-container fluid class="page-playlist">
    <div v-if="data?.getAlbumByShareToken" class="page-playlist__wrapper d-flex flex-column">
      <div class="page-playlist__header">
        <PlaylistHeader :playlist="data?.getAlbumByShareToken" />
      </div>
      <div class="page-playlist__song-list mt-5">
        <SongTile
          v-for="(song, index) in data?.getAlbumByShareToken.songs"
          :key="song.songUrl"
          :song="song"
          :position="index + 1"
          class="mt-5"
        />
      </div>
    </div>
    <div v-else class="page-play-list__error d-flex flex-column align-center justify-center">
      <h3>Sorry this page uvialable</h3>
      <v-btn size="large" variant="text" :to="localePath({ name: 'index' })">Go To main Page</v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import PlaylistHeader from '~/components/playlist/Header.vue'
import SongTile from '~/components/playlist/SongTile.vue'
const localePath = useLocalePath()
const route = useRoute()

const { data } = await useAsyncData(() => GqlGetAlbumDataQuery({ shareToken: route.params.shareToken[0] }))
</script>

<style lang="scss">
.page-playlist {
  padding-bottom: 30px;
}
</style>
