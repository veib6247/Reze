import axios from 'axios'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const urlEndpoint = `https://test.ctpe.info/bip/webapi/v1/merchants/${query.merchantId}/ownedMerchantAccounts`
  const requestCredentialHeader = `${process.env.EMAIL}:${process.env.PASSWORD}`

  try {
    const { data } = await axios({
      url: urlEndpoint,
      method: 'get',
      headers: {
        credentials: requestCredentialHeader,
      },
    })

    return data.merchantAccounts

    //
  } catch (error) {
    return {
      SeverError: error,
    }
  }
})
