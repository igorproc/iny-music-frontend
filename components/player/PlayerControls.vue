<template>
  <div class="player-controls d-flex flex-column">
    <div class="player-controls__actions d-flex align-center justify-center">
      <v-btn :icon="playIcon" variant="text" @click="togglePlayer" />
    </div>
    <div class="player-controls__timeline"></div>
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
const { isPlaying, togglePlayer } = usePlayer(song.value)

const playIcon = computed(() => {
  if (isPlaying.value) return 'mdi-pause'
  return 'mdi-play'
})
</script>
