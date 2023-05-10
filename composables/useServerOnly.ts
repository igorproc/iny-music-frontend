export const serverOnly = (callback: () => void): void | boolean => {
  if(process.server) {
    return callback()
  }
  return false
}