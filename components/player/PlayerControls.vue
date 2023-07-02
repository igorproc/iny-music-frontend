<template>
  <div class="player-controls d-flex flex-column">
    <div class="player-controls__actions d-flex align-center justify-center">
      <v-btn icon="mdi-shuffle" :color="shuffleColor" variant="text" @click="toggleShuffle" />
      <v-btn icon="mdi-skip-previous" variant="text" />
      <v-btn :icon="playIcon" variant="text" @click="player.toggle" />
      <v-btn icon="mdi-skip-next" variant="text" />
      <v-btn icon="mdi-repeat-off" variant="text" />
    </div>
    <div class="player-controls__timeline d-flex justify-space-between">
      <span class="timeline__playing-time mt-1">{{ prettyPlayingTime }}</span>
      <PlayerProgressBar class="w-100" />
      <span class="timeline__duration-time mt-1">{{ prettySongDuration }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayer } from '~/composables/usePlayer'
import { TSong } from '~/types/player'
import PlayerProgressBar from '~/components/player/ProgressBar.vue'

interface IPlayerControlsProps {
  song: TSong
}

const props = defineProps<IPlayerControlsProps>()
const { song } = toRefs(props)
const player = usePlayer(song.value)
const shuffle = ref(false)

const prettySongDuration = computed(() => songPrettyTime(Number(player.duration)))
const prettyPlayingTime = computed(() => songPrettyTime(Number(player.currentTime)))
const shuffleColor = computed(() => {
  if (shuffle.value) return 'green'
  return 'white'
})
const playIcon = computed(() => {
  if (player.isPlaying) return 'mdi-pause'
  return 'mdi-play'
})

const toggleShuffle = () => {
  shuffle.value = !shuffle.value
}
</script>
