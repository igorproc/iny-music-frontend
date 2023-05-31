<template>
  <v-app class="default">
    <v-layout class="default__main d-flex" full-height>
      <aside class="main-aside">
        <CommonAside />
      </aside>
      <v-container class="main-content">
        <div class="main-content__wrapper h-100">
          <header class="main-content__header">
            <CommonHeader />
          </header>
          <v-main class="main-content__content">
            <slot />
          </v-main>
          <footer class="main-content__footer">
            <CommonFooter />
          </footer>
        </div>
      </v-container>
    </v-layout>
    <div class="default__player-placeholder w-100">
      <PlayerPlaceholder />
    </div>
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
  .default__main {
    .main-aside {
      position: relative;
    }
    .main-content {
      .main-content__wrapper {
        background-color: rgb(var(--v-theme-primary));
        border-radius: 10px;
      }
    }
  }
  .default__player-placeholder {
    z-index: 901;
    position: fixed;
    bottom: 0;
    height: 100px;
  }
}
</style>
