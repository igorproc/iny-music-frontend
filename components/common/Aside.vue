<template>
  <div class="d-none d-md-block h-100 the-aside__resize-bar resize-bar" @drag="onDrag" />
  <v-container
    :style="{ width: asideWidth }"
    class="d-flex justify-end the-aside h-100 mr-5"
  >
    <div class="d-flex flex-column w-100 the-aside__containe">
      <CommonLogo class="container__logo" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue"
import CommonLogo from "~/components/common/Logo.vue"

let asideWidth: Ref<string> = ref("300px")
const minAsideWidth: number = 100
const maxAsideWith: number = 600

const onDrag = (event: DragEvent): void => {
  const dragWidth: number = event.clientX
  if(!dragWidth) return

  if(dragWidth <= minAsideWidth) {
    asideWidth.value = minAsideWidth + 'px'
    return
  }

  if(dragWidth >= maxAsideWith) {
    asideWidth.value = maxAsideWith + 'px'
    return
  }

  asideWidth.value = event.clientX + 'px'
} 
</script>

<style lang="scss">
.the-aside {
  &__resize-bar {
    right: 0;
    position: absolute;
    width: 3px;
    cursor: e-resize;
    &:hover, &:focus {
      background-color: #4d4d4d;
      border: 1px solid #4d4d4d;
    }
  }
  .container__logo {
    height: 50px;
  }
}
</style>
