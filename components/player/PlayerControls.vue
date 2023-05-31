<template>
  <div class="player-controls d-flex flex-column">
    <div class="player-controls__actions d-flex align-center justify-center">
      <v-btn :icon="playIcon" variant="text" @click="togglePlayer" />
    </div>
    <div class="player-controls__timeline">{{ prettyPlayingTime }} {{ prettySongDuration }}</div>
  </div>
</template>

<script setup lang="ts">
import usePlayer from '~/composables/usePlayer'
import { TSong } from '~/types/player'

interface IPlayerControlsProps {
  song: TSong
}

const props = defineProps<IPlayerControlsProps>()
const { song } = toRefs(props)
const { isPlaying, togglePlayer, currentTime, duration } = usePlayer(song.value)

const prettySongDuration = computed(() => songPrettyTime(Number(duration.value)))
const prettyPlayingTime = computed(() => songPrettyTime(Number(currentTime.value)))
const playIcon = computed(() => {
  if (isPlaying.value) return 'mdi-pause'
  return 'mdi-play'
})
</script>
