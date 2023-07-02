<template>
  <div v-if="song" class="player-song-tile d-flex align-center">
    <v-img :src="song.songImage" max-width="56" class="player-song-tile__image mr-2">
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>
    <div class="player-song-tile__information d-flex flex-column">
      <div class="information__title">
        <span>{{ song.title }}</span>
      </div>
      <div class="information__artists artists">
        <nuxt-link
          :to="localePath({ name: 'playlist', params: { shareToken: song.artist.shareToken } })"
          class="artists__artist mr-1"
        >
          <span>{{ song.artist.altName }}</span>
        </nuxt-link>
        <nuxt-link
          v-for="artist in song.feats"
          v-if="song.feats.length"
          :key="Number(artist.position)"
          :to="localePath({ name: 'index' })"
          class="artists__artist mr-1"
        >
          <span>{{ artist.name }}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TSong } from '~/types/player'

interface IPlayerSongTileProps {
  song: TSong
}

const localePath = useLocalePath()
const props = defineProps<IPlayerSongTileProps>()

const { song } = toRefs(props)
</script>

<style lang="scss">
.player-song-tile {
  .player-song-tile__information {
    .information__artists {
      .artists__artist {
        text-decoration: none;
        font-size: 14px;
        color: #b3b3b3;
        &:hover {
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
