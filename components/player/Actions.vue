<template>
  <div class="player-actions">
    <v-slider
      v-model="volumeChange"
      min="0"
      max="100"
      step="1"
      class="player-actions__volume"
      @wheel.prevent="changeVolumeByWheel"
    />
  </div>
</template>

<script setup lang="ts">
import usePlayer from '~/composables/usePlayer'

const WHEEL_VOLUME_STEP = 5
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
      setVolume(`0.${volumeChange.value}`)
      break
  }
})
const changeVolumeByWheel = (event: WheelEvent): void => {
  if (event.deltaY > 0) {
    if (volumeChange.value < WHEEL_VOLUME_STEP) volumeChange.value = 0
    else volumeChange.value -= WHEEL_VOLUME_STEP
    return
  }
  volumeChange.value += WHEEL_VOLUME_STEP
}
</script>
