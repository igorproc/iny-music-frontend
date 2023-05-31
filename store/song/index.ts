import { defineStore } from 'pinia'
import { TSongQueue } from '~/types/player'

type TSongStoreState = {
  currentSongId: number
  songQueue: TSongQueue | null
}

export const useSongStore = defineStore('song-store', {
  state: (): TSongStoreState => ({
    currentSongId: 1,
    songQueue: null,
  }),
  actions: {
    setSongQueue(songList: TSongQueue['songs']) {
      this.songQueue = {
        playlistId: 1,
        songs: songList,
      }
    },
  },
})
