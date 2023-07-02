<template>
  <v-app class="default">
    <v-layout class="default__main" full-height>
      <v-container fluid class="d-flex main-content">
        <aside class="main-aside">
          <CommonAside />
        </aside>
        <div class="w-100 main-content__wrapper wrapper">
          <header class="main-content__header">
            <CommonHeader />
          </header>
          <v-main class="main-content__content">
            <slot />
          </v-main>
          <div class="main-content__footer">
            <CommonFooter />
          </div>
        </div>
      </v-container>
      <v-footer fixed elevation="0" class="default__player-placeholder pa-0 w-100">
        <PlayerPlaceholder class="w-100" />
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import CommonAside from '~/components/common/Aside.vue'
import CommonHeader from '~/components/common/Header.vue'
import CommonFooter from '~/components/common/Footer.vue'
import PlayerPlaceholder from '~/components/player/Placeholder.vue'
</script>

<style lang="scss">
.default {
  .main-content {
    .main-content__wrapper {
      position: relative;
      .main-content__header {
        position: absolute;
        width: 100%;
      }
      .main-content__content {
        margin-top: 80px;
      }
    }
  }
  .default__player-placeholder {
    position: fixed;
    bottom: 0;
    height: 100px;
  }
}
</style>
