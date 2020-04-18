import axios from 'axios'
import config from '../config'

const URL = config.api_url
const LOCALE = config.locale

export const getCovid19Data = () => axios.get(`${URL}/countries/${LOCALE}`)

