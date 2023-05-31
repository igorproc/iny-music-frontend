<template>
  <div class="player-actions">
    <v-slider v-model="volumeChange" min="0" max="100" class="player-actions__volume" />
  </div>
</template>

<script setup lang="ts">
import usePlayer from '~/composables/usePlayer'

const { setVolume } = usePlayer()
const volumeChange = ref(0)
watch(volumeChange, () => {
  switch (volumeChange.value) {
    case 0:
      setVolume(0)
      break
    case 100:
      setVolume(1)
      break
    default:
      const currentVolume = (volumeChange.value / 1000).toString().slice(0, 4)
      setVolume(currentVolume)
  }
})
</script>
