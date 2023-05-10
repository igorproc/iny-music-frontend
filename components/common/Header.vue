<template>
  <v-container class="d-flex align-center justify-space-between the-header">
    <div class="the-header__history-buttons">
      <v-btn
        @click="router.back()"
        icon
        elevation="1"
        color="#000000b3"
        :disabled="!canRouteBack"
        class="mr-2"
      >
        <v-icon color="accent">mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        @click="$router.forward()"
        icon
        elevation="1"
        color="#000000b3"
        :disabled="!canRouteForward"
      >
        <v-icon color="accent">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <CommonHeaderLinkList />
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "nuxt/app"
import { ref, Ref, watch } from "vue"

const isAuth: Ref<boolean> = ref(false)
const canRouteForward: Ref<boolean> = ref(false)
const canRouteBack: Ref<boolean> = ref(false)
const router = useRouter()
const route = useRoute()

watch(route, () => {  
  if(router.options.history.state.back) canRouteBack.value = true
  if(router.options.history.state.forward) canRouteForward.value = true
})
</script>

<style lang="scss" scoped>
.v-btn--disabled {
  opacity: 0.6;
}
</style>
