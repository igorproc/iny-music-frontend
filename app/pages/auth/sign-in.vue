<template>
  <div class="sign-in-page">
    <AppSignInCard />
  </div>
</template>

<script setup lang="ts">
import AppSignInCard from '~/components/auth/sign-in/AppSignInCard.vue'

definePageMeta({
  layout: 'clear',
})
</script>

<style lang="scss">
.sign-in-page {
  width: 100%;
  height: 100%;

  @media screen and (min-width: map-get($display-breakpoints, 'md')) {
    width: auto;
    height: auto;
  }
}
</style>
