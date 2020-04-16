import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

const url = 'https://covid19.mathdro.id/api'
const country = 'ph'

const error = {
  code: 500,
  message: 'Something went wrong.'
}

export const covid19Slice = createSlice({
  name: 'covid19',
  initialState: {
    data: {
      loading: true,
      info: null
    }
  },
  reducers: {
    updateData: (state, action) => {
      const { payload } = action
      switch (payload.type) {
        case FETCH_DATA_SUCCESS:
          state.data.info = payload.data
        default:
          state.data.loading = false
      }
    }
  }
})

export const fetchCovid19Data = () => async (dispatch) => {
    await dispatch({type: FETCH_DATA_REQUEST})
    try {
      const { data } = await axios.get(`${url}/countries/${country}`)
      const response  = data ? { type: FETCH_DATA_SUCCESS, data } : { type: FETCH_DATA_FAIL, data: error}
      await dispatch(covid19Slice.actions.updateData(response))
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAIL, payload: { message: error }})
    }
}

export const selectData = state => state.covid19.data
export default covid19Slice.reducer
