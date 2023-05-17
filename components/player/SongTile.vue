<template>
  <div v-if="song" class="player-song-tile d-flex">
    <v-img class="player-song-tile__image" />
    <div class="player-song-tile__information d-flex flex-column">
      <div class="information__title">
        <span>{{ song.title }}</span>
      </div>
      <div class="information__arists">
        <span>{{ song.artist?.altName }},</span>
        <span
          v-for="artist in song.feats"
          :key="artist.position"
        >
          {{ artist.name }},
        </span>
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
</script>