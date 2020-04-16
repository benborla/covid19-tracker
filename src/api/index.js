import axios from 'axios'

const URL = 'https://covid19.mathdro.id/api'
const LOCALE = 'ph'

export const getCovid19Data = () => axios.get(`${URL}/countries/${LOCALE}`)

