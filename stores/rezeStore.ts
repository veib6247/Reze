import { defineStore } from 'pinia'

export const useChannelModalStore = defineStore('channelModal', {
  state: () => {
    return {
      showModal: false,
    }
  },
})
