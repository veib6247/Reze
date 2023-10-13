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

type DivisionInfo = {
  customerId: string
  description: string
  id: string
  name: string
  pspId: string
  state: string
}

export const useDivisionInfo = defineStore('divisionInfo', {
  state: () => {
    return {
      detail: {} as DivisionInfo,
    }
  },
})
