import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectData,
  fetchCovid19Data
} from './covid19Slice'

export function Covid19() {
  const data = useSelector(selectData)
  const dispatch = useDispatch()
  const [info, setInfo] = useState(null)

  useEffect(() => {
    dispatch(fetchCovid19Data)
  }, [])

  useEffect(() => {
    getInfo()
  })

  const getInfo = async () => {
    const { info } = await data
    if (info) {
      setInfo(info)
    }
  }

  return (
    <h1>Covid19 Tracker {data.loading ? '...' : info && info.confirmed.value}</h1>
  )
} 
