import type { NuxtApp } from '#app'
import { usePinia } from "#imports"
import { useIndexStore } from './index'
import { useServerOnly } from '~/composables/useServerOnly'
import { useClientOnly } from '~/composables/useClientOnly'

export default async function (nuxtApp: NuxtApp) {
  const $pinia = usePinia()
  async function onInit() {
    console.log('app init')
  }

  async function onServerInit() {
    console.log('init on server')
  }

  async function onClientInit() {
    const indexStore = useIndexStore($pinia)
    await indexStore.clientInit()
  }

  // step 1 - all initialize
  await onInit()
  if (nuxtApp.payload.serverRendered) {
    // SSR MODE
    useServerOnly(async () => {
      await onServerInit()
    })
    useClientOnly(async () => {
      await onClientInit()
    })
  } else {
    // SPA MODE
    await onServerInit()
    await onClientInit()
  }
}
