import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CountUp from 'react-countup'
import {
  selectData,
  fetchCovid19Data
} from './covid19Slice'

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
    dispatch(fetchCovid19Data())
  }, [])

  useEffect(() => {
    getInfo()
  })

  const getInfo = async () => {
    const { info } = await data
    if (info) {
      const { confirmed, deaths, recovered, lastUpdate } = info
      setInfo({ confirmed: confirmed.value, deaths: deaths.value, recovered: recovered.value, lastUpdate })
    }
  }

  const confirmed = data.loading ? 0 : info && info.confirmed
  const deaths = data.loading ? 0 : info && info.deaths
  const recovered = data.loading ? 0 : info && info.recovered
  const lastUpdate = data.loading ? null : info && info.lastUpdate
  const timeUpdated = data.loading ? null : info && new Date(lastUpdate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

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
