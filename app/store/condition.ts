import { defineStore } from 'pinia'

export const useConditionStore = defineStore('condition-store', {
  state () {
    return {
      asideIsVisible: true,
      switchLanguageModalIsVisible: false,
      headerDrawerIsVisible: false,
    }
  },
  actions: {
    toggleAside () {
      this.asideIsVisible = !this.asideIsVisible
    },
    closeSwitchLanguageModal () {
      this.switchLanguageModalIsVisible = false
    },
    openSwitchLanguageModal () {
      this.switchLanguageModalIsVisible = true
    },
    openHeaderDrawer () {
      this.headerDrawerIsVisible = true
    },
    closeHeaderDrawer () {
      this.headerDrawerIsVisible = false
    }
  }
})
