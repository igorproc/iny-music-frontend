<template>
  <v-row class="playlist-song-tile py-2">
    <v-col cols="9" class="tile__content h-100 d-flex align-center">
      <v-btn size="small" icon variant="text" :ripple="false" class="tile__content-changed" @click="playSong">
        <span class="content__position">{{ position }}</span>
        <v-icon icon="mdi-play" size="20" class="content__play-action" />
      </v-btn>
      <div class="tile__content-wrap d-flex flex-column">
        <span class="content__title">{{ song.title }}</span>
        <div class="content__artist">
          <v-icon
            v-if="song.explicit"
            size="20"
            color="#a7a7a7"
            icon="mdi-alpha-e-box-outline"
            class="content__artist--is-explict mr-1"
          />
          <nuxt-link :to="localePath({ name: 'index' })" class="content__artist-name">{{
            song.artist.altName
          }}</nuxt-link>
        </div>
      </div>
    </v-col>
    <v-col cols="3" class="tile__info h-100 py-0 d-flex align-center justify-end">
      <v-btn icon variant="text" class="mr-2">
        <v-icon icon="mdi-heart-outline" size="24" />
      </v-btn>
      <span class="tile__info-duration">{{ prettySongTime }}</span>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useSongStore } from '~/store/song'
import { TSong } from '~/types/player'

interface IPlaylistSongTileProps {
  song: TSong
  position: number
}

const localePath = useLocalePath()
const props = defineProps<IPlaylistSongTileProps>()
const { song, position } = toRefs(props)
const songStore = useSongStore()

const prettySongTime = computed<string>(() => songPrettyTime(props.song.duration))
const playSong = () => {
  songStore.setSongQueue(song.value)
}
</script>

<style lang="scss">
.playlist-song-tile {
  height: 56px;
  .tile__content {
    .tile__content-changed {
      .v-btn__overlay {
        display: none;
      }
      .content__play-action {
        display: none;
      }
      .content__position {
        font-size: 16px;
      }
    }
    .content__title {
      color: #fff;
    }
    .content__artist {
      .content__artist-name {
        color: #a7a7a7;
        text-decoration: none;
        &:hover {
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.3) !important;
    border-radius: 5px;
    .tile__content {
      .tile__content-changed {
        .content__position {
          display: none;
        }
        .content__play-action {
          display: block;
        }
      }
    }
  }
}
</style>
