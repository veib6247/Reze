import axios from 'axios'

export default defineEventHandler(async (event) => {
  const urlEndpoint = `https://test.ctpe.info/bip/webapi/v1/psps/${process.env.PSP_ID}/divisions`
  const requestCredentialHeader = `${process.env.EMAIL}:${process.env.PASSWORD}`

  try {
    const response = await axios({
      url: urlEndpoint,
      method: 'get',
      headers: {
        credentials: requestCredentialHeader,
      },
    })
    const data = response.data
    return data
  } catch (error) {
    return {
      SeverError: error,
    }
  }
})
