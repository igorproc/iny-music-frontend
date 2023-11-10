<template>
  <div class="app-default-layout">
    <aside class="d-none d-md-block app-default-layout__aside">
      <AppAside />
    </aside>
    <main class="app-default-layout__wrapper">
      <div class="wrapper__header">
        <AppHeader />
      </div>
      <div class="wrapper__content">
        <slot />
      </div>
    </main>
    <footer class="app-default-layout__footer">
      <AppPlayer />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppAside from '~/components/common/aside/AppAside.vue'
import AppHeader from '~/components/common/header/AppHeader.vue'
import AppPlayer from '~/components/player/AppPlayer.vue'
</script>

<style lang="scss">
.app-default-layout {
  background: $background-color;
  position: relative;
  height: 100%;
  display: flex;

  .app-default-layout__aside {
    padding: 12px 10px;
    height: calc(100% - 115px);
    display: none;
  }
  .app-default-layout__wrapper {
    margin: 12px 10px;
    position: relative;
    height: calc(100% - 115px);
    width: 100%;
    background: $surface-color;
    border-radius: 8px;

    .wrapper__header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .wrapper__content {
      padding: 12px 24px;
      margin-top: 64px;
    }
  }
  .app-default-layout__footer {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media screen and (min-width: map-get($display-breakpoints, 'md')){
    padding: 8px;

    .app-default-layout__aside {
      display: block;
    }
  }
}
</style>
