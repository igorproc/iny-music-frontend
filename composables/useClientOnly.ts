export const clientOnly = (callback: () => void): void | boolean => {
  if(process.client) {
    return callback()
  }
  return false
}