<template>
  <v-app class="login-layout">
    <v-layout :full-height="true" class="login__container">
      <v-app-bar color="background" class="login__header">
        <CommonLogo class="header__logo" />
      </v-app-bar>
      <v-main class="login__main d-flex align-center justify-center">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import CommonLogo from '~/components/common/Logo.vue'
</script>

<style lang="scss">
.login-layout {
  .login__container {
    .login__header {
      background-color: #fff !important;
      .v-toolbar__content {
        justify-content: center;
      }
      .header__logo {
        width: 200px;
      }
    }
    .login__main {
      background-color: #fff !important;
    }
  }
}
</style>