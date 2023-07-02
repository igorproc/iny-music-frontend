<template>
  <v-container fluid class="page-playlist">
    <div v-if="data?.getAlbumByShareToken" class="page-playlist__wrapper d-flex flex-column">
      <div class="page-playlist__header">
        <PlaylistHeader :playlist="data.getAlbumByShareToken" />
      </div>
      <div v-if="data.getAlbumByShareToken.songs.length" class="page-playlist__song-list mt-5">
        <SongTile
          v-for="(song, index) in data?.getAlbumByShareToken.songs"
          :key="song.songUrl"
          :song="song"
          :position="index + 1"
          class="mt-5"
          @song-is-selected="setSongQueue"
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
import { DeepRequiredNonNullable, TGqlResult } from '~/types/gql'
import { useSongStore } from '~/store/song/index'

const localePath = useLocalePath()
const route = useRoute()
const songStore = useSongStore()

type TAlbumData = {
  getAlbumByShareToken: DeepRequiredNonNullable<TGqlResult<'getAlbumDataQuery'>>
}

const { data } = await useAsyncData<TAlbumData>(() => GqlGetAlbumDataQuery({ shareToken: route.params.shareToken[0] }))

const setSongQueue = (sid: number) => {
  if (!data.value?.getAlbumByShareToken.songs.length) return

  songStore.setSongQueue(sid, data.value.getAlbumByShareToken.songs)
}
</script>
