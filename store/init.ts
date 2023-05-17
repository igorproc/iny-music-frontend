import type { NuxtApp } from '#app'
import { usePinia } from "#imports"
import { useIndexStore } from './index'
import { useClientOnly } from '~/composables/useClientOnly'

export default async function (nuxtApp: NuxtApp) {
  const $pinia = usePinia()
  async function onInit() {
    const indexStore = useIndexStore($pinia)
    await indexStore.appInit()
  }

  async function onClientInit() {
    const indexStore = useIndexStore($pinia)
    await indexStore.clientInit()
  }

  // step 1 - all initialize
  await onInit()
  if (nuxtApp.payload.serverRendered) {
    useClientOnly(async () => {
      await onClientInit()
    })
  } else {
    // SPA MODE
    await onClientInit()
  }
}
