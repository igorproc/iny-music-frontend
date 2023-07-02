import { defineStore } from 'pinia'
import { TSong } from '~/types/player'

type TSongStoreState = {
  currentSongId: number
  songQueue: TSong[] | null
}

export const useSongStore = defineStore('song-queue-store', {
  state: (): TSongStoreState => ({
    currentSongId: 0,
    songQueue: null,
  }),
  getters: {
    currentSongData(): TSong | void {
      if (!this.songQueue) return

      return this.songQueue.find((song) => song.sid === this.currentSongId)
    },
  },
  actions: {
    setSongQueue(songId: number, songList: TSong[]) {
      this.currentSongId = songId
      this.songQueue = songList
    },
    shuffleQueue() {
      if (!this.songQueue?.length) return
      this.songQueue = this.songQueue.sort(() => 0.5 - Math.random())
    },
  },
})
