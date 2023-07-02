export function songPrettyTime(time = 0): string {
  if (!time) return '00:00'

  const totalMinutes = Math.floor(time / 60)

  const seconds = Math.floor(time % 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.floor(totalMinutes % 60)
  let hoursPart = ''
  const minutesPart = minutes < 10 ? `0${minutes}:` : `${minutes}:`

  if (hours) {
    hoursPart = hours < 10 ? `0${hours}:` : `${hours}:`
  }

  return hoursPart + minutesPart + (seconds < 10 ? `0${seconds}` : `${seconds}`)
}
