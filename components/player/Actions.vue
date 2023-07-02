<template>
  <div class="player-actions">
    <div class="player-actions__volume d-flex">
      <v-icon :icon="volumeIcon" color="#1db954" class="volume__icon mt-1" />
      <v-slider
        min="0"
        max="100"
        step="1"
        thumb-size="13"
        track-color="#fefefe"
        thumb-color="#1db954"
        class="volume__slider"
        :model-value="volume"
        @update:model-value="setVolume"
        @wheel="changeVolumeByWheel"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayer } from '~/composables/usePlayer'

const WHEEL_VOLUME_STEP = 5
const { setVolume, getVolume } = usePlayer(null)
const volume = computed(() => getVolume() * 100)
const volumeIcon = computed(() => {
  if (volume.value < 30) {
    return 'mdi-volume-low'
  }
  if (volume.value > 70) return 'mdi-volume-high'
  return 'mdi-volume-medium'
})

const changeVolumeByWheel = (event: WheelEvent): void => {
  event.preventDefault()
  if (event.deltaY > 0) {
    if (volume.value < WHEEL_VOLUME_STEP) {
      setVolume(0)
    } else {
      setVolume(volume.value - WHEEL_VOLUME_STEP)
    }
    return
  }
  setVolume(volume.value > 95 ? 1 : volume.value + WHEEL_VOLUME_STEP)
}
</script>

<style lang="scss">
.player-actions {
  .player-actions__volume {
    .volume__slider {
      width: 100px;
      .v-slider-thumb {
        display: none;
      }
      &:hover {
        .v-slider-thumb {
          display: block;
        }
      }
    }
  }
}
</style>
