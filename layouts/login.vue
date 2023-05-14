<template>
  <v-app class="login-layout">
    <v-layout class="login__container">
      <v-main class="login__main d-flex align-center justify-center">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style lang="scss">
.login-layout {
  .login__container {
    .login__header {
      // background-color: #fff !important;
      .v-toolbar__content {
        justify-content: center;
      }
    }
    // .login__main {
    //   background-color: #fff !important;
    // }
  }
}
</style>