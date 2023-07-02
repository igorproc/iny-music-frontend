<template>
  <div class="the-aside">
    <div class="d-none d-md-block h-100 the-aside__resize-bar resize-bar" @drag="onDrag" />
    <div :style="{ width: asideWidth }" class="d-flex justify-end the-aside h-100">
      <div class="d-flex flex-column w-100 the-aside__container">
        <CommonAsideMainTile class="mb-2" />
        <CommonAsideMediaTile />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let asideWidth = ref('300px')
const minAsideWidth = 100
const maxAsideWith = 600

const onDrag = (event: DragEvent): void => {
  const dragWidth: number = event.clientX
  if (dragWidth < minAsideWidth || dragWidth > maxAsideWith) return

  asideWidth.value = event.clientX + 'px'
}
</script>

<style lang="scss">
.the-aside {
  position: relative;
  &__resize-bar {
    right: -5px;
    z-index: 1;
    position: absolute;
    width: 4px;
    cursor: e-resize;
    &:hover,
    &:focus {
      border-right: 1px solid #4d4d4d;
    }
  }
  .container__logo {
    height: 50px;
  }
}
</style>
