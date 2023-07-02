<template>
  <div class="player-progress-bar">
    <v-slider
      v-model="playTime"
      min="0"
      :max="player.duration"
      step="1"
      thumb-size="13"
      class="progress-bar__line mx-3"
    />
  </div>
</template>

<script setup lang="ts">
import { usePlayer } from '~/composables/usePlayer'

const player = usePlayer(null)
const playTime = computed({
  get() {
    return player.currentTime
  },
  set(time) {
    player.pause()
    player.setPlayingTime(time)
  },
})
</script>
