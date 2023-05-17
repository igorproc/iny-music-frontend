import { TGqlResult } from './../../types/gql';
import { defineStore } from 'pinia'

type TSongStoreState = {
  currentSong: TGqlResult<'getSongDataQuery'>['getSongById'] | null
}

export const useSongStore = defineStore('song-store', {
  state: (): TSongStoreState => ({
    currentSong: null
  }),
  getters: {},
  actions: {
    async getSongById(id: number): Promise<void> {
      const songData = await GqlGetSongDataQuery({ id })
      if(songData) this.currentSong = songData.getSongById
    }
  }
})