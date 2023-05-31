import { DeepRequiredNonNullable } from '~/types/gql'
import { TSong } from '~/types/player'

let songInstance: TSong | null = null
const isPlaying = ref(false)
const $player = document.createElement('audio')

interface IPlayer {
  isPlaying: Ref<boolean>
  togglePlayer: () => void
  setVolume: (volume: number) => void
  currentTime: Ref<string>
  duration: Ref<string>
}

function initSong(song: TSong) {
  songInstance = song
  return songInstance
}

export default function usePlayer(song: TSong | null = null): DeepRequiredNonNullable<IPlayer> {
  song = song ? initSong(song) : songInstance
  if (!song) return

  const duration = ref(0)
  const currentTime = ref(0)

  const onTimeUpdate = () => {
    currentTime.value = $player.currentTime
  }

  const onUploadSrc = () => {
    duration.value = $player.duration
  }

  $player.src = song.songUrl
  $player.addEventListener('timeupdate', onTimeUpdate)
  $player.addEventListener('loadeddata', onUploadSrc)

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
    currentTime,
    duration,
  }
}
