export type DivisionInfo = {
  customerId: string
  description: string
  id: string
  name: string
  pspId: string
  state: string
}

export type Merchant = {
  customerId: string
  description: string
  id: string
  name: string
  secret: string
  state: string
}

export type MerchantData = Merchant[]

export type ChannelInfo = {
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
