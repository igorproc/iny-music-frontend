import { TSong } from '~/types/player'

const playerInstance = reactive({
  __isCreated: false,
  $audio: document.createElement('audio'),
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volumeLocaleStorageName: 'player-volume',

  // open api
  play() {
    if (this.__isCreated && !this.isPlaying) {
      this.isPlaying = true
      this.$audio.play()
    }
  },
  pause() {
    if (this.__isCreated && this.isPlaying) {
      this.isPlaying = false
      this.$audio.pause()
    }
  },
  toggle() {
    return this.isPlaying ? this.pause() : this.play()
  },

  setVolume(volume: number) {
    this.$audio.volume = volume
    localStorage.setItem(this.volumeLocaleStorageName, volume + '')
  },
  getVolume() {
    return Number(localStorage.getItem(this.volumeLocaleStorageName)) || 100
  },

  // closed api
  _onUploadMeta() {
    this.duration = this.$audio.duration
  },
  _onCurrentTimeUpdate() {
    this.duration = this.$audio.duration
  },
})

function createPlayer(song: TSong) {
  if (playerInstance.__isCreated) {
    return playerInstance
  }

  playerInstance.$audio.src = song.songUrl
  playerInstance.duration = song.duration
  playerInstance.$audio.volume = playerInstance.getVolume()

  playerInstance.$audio.addEventListener('timeupdate', playerInstance._onCurrentTimeUpdate)
  playerInstance.$audio.addEventListener('loadedmetadata', playerInstance._onUploadMeta)

  onUnmounted(() => {
    playerInstance.$audio.removeEventListener('timeupdate', playerInstance._onCurrentTimeUpdate)
    playerInstance.$audio.removeEventListener('loadedmetadata', playerInstance._onUploadMeta)
  })
}

export function usePlayer(song: TSong | null) {
  if (song) {
    createPlayer(song)
  }
  return playerInstance
}
