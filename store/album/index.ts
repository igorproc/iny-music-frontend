import { TGqlResult } from '~/types/gql';
import { defineStore } from 'pinia';

type TAlbumStoreState = {
  currentPlaylist: TGqlResult<'getAlbumDataQuery'>['getAlbumByShareToken'] | null
  playlists: TGqlResult<'getAlbumDataQuery'>['getAlbumByShareToken'][]
}

type TPlaylistOutput = TGqlResult<'getAlbumDataQuery'>

export const useAlbumStore = defineStore('album-store', {
  state: (): TAlbumStoreState => ({
    currentPlaylist: null,
    playlists: []
  }),
  getters: {
    playlistIsSelected: (state) => state.currentPlaylist ? true : false
  },
  actions: {
    async loadPlaylist(shareToken: string) {
      const playlistIndex = this.playlists.findIndex((playlist) => playlist.shareToken === shareToken)
      if(playlistIndex !== -1) {
        this.currentPlaylist = this.playlists[playlistIndex]
        return
      }
      const playlistData: TPlaylistOutput = await GqlGetAlbumDataQuery({ shareToken })
      if(playlistData) {
        this.currentPlaylist = playlistData.getAlbumByShareToken
        this.playlists.push(playlistData.getAlbumByShareToken)
        return
      }
    }
  }
})