<template>
  <div class="aside-main-tile d-flex flex-column">
    <v-btn size="large" variant="text" class="tile__action px-0 align-center justify-start">
      <v-icon size="22" icon="mdi-home-outline" class="tile__icon mr-2" />
      <span class="tile__content">Home</span>
    </v-btn>
    <v-btn size="large" variant="text" class="tile__action px-0 align-center justify-start">
      <v-icon size="22" icon="mdi-magnify" class="tile__icon mr-2" />
      <span class="tile__content">Search</span>
    </v-btn>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.aside-main-tile {
  background-color: rgb(var(--v-theme-primary));
  padding: 15px;
  border-radius: 10px;
  .tile__action {
    .tile__content {
      font-size: 18px;
      text-transform: none;
    }
  }
}
</style>
