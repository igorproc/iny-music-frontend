<template>
  <div class="d-none d-md-block h-100 the-aside__resize-bar resize-bar" @drag="onDrag" />
  <v-container
    :style="{ width: asideWidth }"
    class="d-flex justify-end the-aside h-100"
  >
    <div class="d-flex flex-column w-100 the-aside__container">
      <CommonAsideMainTile class="mb-2" />
      <CommonAsideMediaTile />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue"

let asideWidth = ref<string>("300px")
const minAsideWidth: number = 100
const maxAsideWith: number = 600

const onDrag = (event: DragEvent): void => {
  const dragWidth: number = event.clientX  
  if(dragWidth < minAsideWidth || dragWidth > maxAsideWith) return
  
  asideWidth.value = event.clientX + 'px'
} 
</script>

<style lang="scss">
.the-aside {
  &__resize-bar {
    right: 0;
    position: absolute;
    width: 4px;
    cursor: e-resize;
    &:hover, &:focus {
      border-right: 1px solid #4d4d4d;
    }
  }
  .container__logo {
    height: 50px;
  }
}
</style>
