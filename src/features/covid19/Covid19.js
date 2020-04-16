import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CountUp from 'react-countup'
import {
  selectData,
  fetchCovid19Data
} from './covid19Slice'

const UPDATE_EVERY_FIVE_MINUTES = 60000 * 5

export function Covid19 () {
  const data = useSelector(selectData)
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    lastUpdate: null
  })

  useEffect(() => {
    setInterval(() => {
      window.location.reload(true)
      console.info('Updating...')
    }, UPDATE_EVERY_FIVE_MINUTES)

    dispatch(fetchCovid19Data())
  }, [dispatch])

  useEffect(() => {
    getInfo()
  })

  const getInfo = async () => {
    const { info } = await data
    if (info && !data.loading) {
      const { confirmed, deaths, recovered, lastUpdate } = info
      setInfo({ confirmed: confirmed.value, deaths: deaths.value, recovered: recovered.value, lastUpdate })
    }
  }

  const confirmed = info && info.confirmed
  const deaths = info && info.deaths
  const recovered = info && info.recovered
  const lastUpdate = info && info.lastUpdate
  const timeUpdated = info && new Date(lastUpdate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <>
      <h1>Philippines Pandemic Update</h1>
      <h3>Confirmed <CountUp start={0} end={confirmed} duration={1.50} separator=', ' /></h3>
      <h3>Deaths <CountUp start={0} end={deaths} duration={1.50} separator=', ' /></h3>
      <h3>Recovered <CountUp start={0} end={recovered} duration={1.50} separator=', ' /></h3>
      <h3>{new Date(lastUpdate).toDateString()} {timeUpdated}</h3>
    </>
  )
}
