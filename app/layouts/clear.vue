<template>
  <div class="app-clear-layout">
    <header>
      <AppClearHeader class="layout__header" />
    </header>
    <main class="app-clear-layout__wrapper">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppClearHeader from '~/components/common/header/AppClearHeader.vue'
</script>

<style lang="scss">
.app-clear-layout {
  .app-clear-layout__wrapper {
    padding: 12px;
    height: calc(100vh - 71px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color);
  }

  @media screen and (min-width: map-get($display-breakpoints, 'sm')) {
    .app-clear-layout__wrapper {
      padding: 40px 24px;
    }
  }
}
</style>
