type ChannelInfo = {
  accessToken: string
  channel: string
  customerId: string
  description: string
  login: string
  name: string
  pwd: string
  secret: string
  sender: string
  state: string
  type: string
}

export const useChannelModalStore = defineStore('channelModal', {
  state: () => {
    return {
      showModal: false,
      channelInfo: {} as ChannelInfo,
    }
  },
})
