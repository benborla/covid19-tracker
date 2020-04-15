import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
const country = 'ph'

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}/countries/${country}`)
    const response = { confirmed, recovered, deaths, lastUpdate }
    return response
  } catch (error) {
    throw new Error(error.message)
  }
}
