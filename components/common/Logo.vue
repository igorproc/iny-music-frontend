<template>
  <nuxt-link :to="localePath({ name: 'index' })" class="app-logo">
    <v-img alt="spotyfree" src="logo.svg" />
  </nuxt-link>
</template>

<style lang="scss">
.app-logo {
  width: 100%;
}
</style>