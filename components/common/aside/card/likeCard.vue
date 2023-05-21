<template>
  <v-card elevation="0" max-height="76" class="aside-likes-card pa-1">
    <nuxt-link :to="localePath('/likes')" class="h-100 d-flex align-center text-decoration-none">
      <v-img src="http://cdn/static/liked-songs.png" max-width="48" class="card__image">
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
      <div class="card__content d-flex flex-column">
        <v-card-title class="card__content-title py-0 pl-3" :class="{ '-active': isPlaying }">Любимые треки</v-card-title>
        <v-card-subtitle class="card__content-info d-flex pl-3">
          <span class="info__type mr-2">Плейлист</span>
          <span class="info__tracks-count">225 треков</span>
        </v-card-subtitle>
      </div>
      <v-icon v-if="isPlaying" class="card__icon" icon="mdi-waveform" color="accent" />
    </nuxt-link>
  </v-card>
</template>

<script setup lang="ts">
interface IProps {
  isPlaying: boolean
}
const props = defineProps<IProps>()
</script>

<style lang="scss">
.aside-likes-card {
  background-color: inherit !important;
  .card__image {
    border-radius: 5px;
  }
  .card__content {
    .card__content-title {
      font-size: 18px;
      color: #fff;
      &.-active {
        color: rgb(var(--v-theme-accent));
      }
    }
    .card__content-info {
      color: #a7a7a7;
    }
  }
  &:hover {
    background-color: hsla(0,0%,100%,.3) !important;
  }
}
</style>