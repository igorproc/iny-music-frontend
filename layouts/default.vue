<template>
  <v-app class="default">
    <v-layout :full-height="true" class="default__main d-flex">
      <aside class="main-aside">
        <CommonAside />
      </aside>
      <v-container class="main-content">
        <header class="main-content__header">
          <CommonHeader />
        </header>
        <v-main class="main-content__content h-100">
          <slot />
        </v-main>
        <footer class="main-content__footer">
          <CommonFooter />
        </footer>
      </v-container>
    </v-layout>
    <div class="default__player">
      <PlayerPlaceholder />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import CommonAside from '~/components/common/Aside.vue'
import CommonHeader from '~/components/common/Header.vue'
import CommonFooter from '~/components/common/Footer.vue'
import PlayerPlaceholder from '~/components/player/Placeholder.vue';
</script>

<style lang="scss">
.default {
  .default__main {
    .main-aside {
      position: relative;
    }
    .main-content__footer {
      margin-top: 50px;
    }
  }
}
</style>