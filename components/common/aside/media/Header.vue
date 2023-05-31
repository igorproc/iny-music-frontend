<template>
  <div class="media-tile-header d-flex justify-space-between align-center">
    <v-btn icon variant="text" :ripple="false" class="header__playlist-action justify-start">
      <v-icon icon="mdi-playlist-play" size="24" />
    </v-btn>
    <span class="header__playlist-title text-center">My Library</span>
    <div class="header__playlist-action-group action-group d-flex">
      <v-btn icon variant="text" size="small" :ripple="false" class="action-group__action justify-end">
        <v-icon icon="mdi-plus" size="22" />
      </v-btn>
      <v-btn icon variant="text" size="small" :ripple="false" class="action-group__action justify-end">
        <v-icon icon="mdi-chevron-right" size="22" />
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.media-tile-header {
  .v-btn__overlay {
    display: none;
  }
  .header__playlist-title {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
