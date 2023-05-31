import { DeepRequiredNonNullable } from '~/types/gql'
import { TSong } from '~/types/player'

let songInstance: TSong | null = null
const isPlaying = ref(false)
const $player = document.createElement('audio')

interface IPlayer {
  isPlaying: Ref<boolean>
  togglePlayer: () => void
  setVolume: (volume: number) => void
}

function initSong(song: TSong) {
  songInstance = song
  return songInstance
}

export default function usePlayer(song: TSong | null = null): DeepRequiredNonNullable<IPlayer> {
  song = song ? initSong(song) : songInstance
  // if (!song) return

  if (song?.songUrl) $player.src = song.songUrl

  const startPlay = () => {
    $player.play().catch(() => true)
    isPlaying.value = true
  }
  const pausePlay = () => {
    $player.pause()
    isPlaying.value = false
  }
  const togglePlayer = () => {
    if (isPlaying.value) {
      pausePlay()
      return
    }
    startPlay()
  }
  const setVolume = (volume: number) => {
    $player.volume = volume
  }

  return {
    isPlaying,
    togglePlayer,
    setVolume,
  }
}
