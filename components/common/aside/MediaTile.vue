<template>
  <div class="aside-media-tile d-flex flex-column">
    <MediaTileHeader />
    <MediaTileLikeCard is-playing />
  </div>
</template>

<script setup lang="ts">
import MediaTileHeader from '~/components/common/aside/media/Header.vue'
import MediaTileLikeCard from '~/components/common/aside/card/likeCard.vue'
</script>

<style lang="scss">
.aside-media-tile {
  background-color: rgb(var(--v-theme-primary));
  padding: 15px;
  border-radius: 10px;
}
</style>
