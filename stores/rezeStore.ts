import { DivisionInfo, Merchant, ChannelInfo } from '~/types'

export const useDivisionInfo = defineStore('divisionInfo', {
  state: () => {
    return {
      detail: {} as DivisionInfo,
    }
  },
})

export const useMerchantInfo = defineStore('merchantInfo', {
  state: () => {
    return {
      detail: {} as Merchant,
    }
  },
})

export const useChannelModalStore = defineStore('channelModal', {
  state: () => {
    return {
      showModal: false,
      channelInfo: {} as ChannelInfo,
    }
  },
})
