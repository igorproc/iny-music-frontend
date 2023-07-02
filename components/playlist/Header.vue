<template>
  <div class="playlist-header d-flex">
    <v-img :src="playlist.albumLogo" max-width="232" class="header__image">
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate />
        </div>
      </template>
    </v-img>
    <div class="header__content d-flex flex-column">
      <span class="content__playlist-type">{{ playlistType }}</span>
      <span class="content__title">{{ playlist.title }}</span>
      <div class="content__info d-flex">
        <nuxt-link :to="localePath({ name: 'index' })" class="info__artist text-decoration-none d-flex">
          <v-img :src="playlist.artist?.artistImage" max-width="24" class="info__artist-image mr-2" />
          <span class="info__artist-name">{{ playlist.artist?.altName }}</span>
        </nuxt-link>
        <v-divider vertical color="#a7a7a7" />
        <span class="info__release-date">{{ getReleaseYear }}</span>
        <v-divider vertical color="#a7a7a7" />
        <span class="info__tracks-count">{{ songsCount }}</span>
        <v-divider vertical color="#a7a7a7" />
        <span class="info__tracks-length">{{ tracksLength }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TGqlResult, DeepRequiredNonNullable } from '~/types/gql'

interface IProps {
  playlist: DeepRequiredNonNullable<TGqlResult<'getAlbumDataQuery'>['getAlbumByShareToken']>
}

const localePath = useLocalePath()
const { t } = useI18n()
const props = defineProps<IProps>()

const playlistType = computed<string>(() => {
  switch (props.playlist.typename) {
    case 'album':
      return 'Album'
    case 'playlist':
      return 'Playlist'
    default:
      return 'none'
  }
})

const getReleaseYear = computed<number>(() => {
  if (props.playlist.createdAt) {
    return new Date(props.playlist.createdAt * 1000).getFullYear()
  }
  return 0
})

const tracksLength = computed<string>(() => {
  const millisecondsSognsLenth = props.playlist.songs.reduce((acc, val) => acc + val.duration, 0)
  return songPrettyTime(millisecondsSognsLenth)
})

const songsCount = computed<string>(() => {
  return t('playlist.header.info.songs', props.playlist.songs.length)
})
</script>

<style lang="scss">
.playlist-header {
  .header__image {
    margin-right: 30px;
  }
  .header__content {
    color: #fff;
    justify-content: space-between;
    .content__playlist-type {
      font-size: 24px;
    }
    .content__title {
      font-weight: bold;
      font-size: 72px;
    }
    .content__info {
      font-size: 18px;
      gap: 5px;
      .info__artist-name {
        color: #fff;
      }
      .info__artist-image {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      .info__tracks-length {
        color: #a7a7a7;
      }
    }
  }
}
</style>
