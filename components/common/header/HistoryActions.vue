<template>
  <div class="header-history-actions">
    <v-btn
      @click="router.back()"
      icon
      elevation="1"
      color="#000000b3"
      size="small"
      :disabled="!canRouteBack"
      class="mr-2"
    >
      <v-icon color="secondary" icon="mdi-chevron-left" />
    </v-btn>
    <v-btn
      @click="$router.forward()"
      icon
      elevation="1"
      color="#000000b3"
      size="small"
      :disabled="!canRouteForward"
    >
      <v-icon color="secondary" icon="mdi-chevron-right" />
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "nuxt/app"
import { ref, watch } from "vue"

const canRouteForward = ref<boolean>(false)
const canRouteBack = ref<boolean>(false)
const router = useRouter()
const route = useRoute()

watch(route, () => {  
  if(router.options.history.state.back) canRouteBack.value = true
  if(router.options.history.state.forward) canRouteForward.value = true
})
</script>

<style lang="scss">
.v-btn--disabled {
  opacity: 0.6;
}
</style>