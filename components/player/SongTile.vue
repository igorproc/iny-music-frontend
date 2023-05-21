<template>
  <div v-if="song" class="player-song-tile d-flex align-center">
    <v-img class="player-song-tile__image" />
    <div class="player-song-tile__information d-flex flex-column">
      <div class="information__title">
        <span>{{ song.title }}</span>
      </div>
      <div class="information__arists">
        <span>{{ getAuthorTtile }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { TGqlResult } from '~/types/gql';

const props = defineProps({
  song: {
    type: Object as PropType<TGqlResult<'getSongDataQuery'>['getSongById']>,
    default: null
  },
})
const getAuthorTtile = computed<string>(() => {
  const authorName = props.song.artist?.altName ? props.song.artist.altName : `${props.song.artist?.name} ${props.song.artist?.surname}`
  if(Array.isArray(props.song.feats) && props.song.feats.length) {
    return `${authorName},`
  }
  return authorName
})
</script>