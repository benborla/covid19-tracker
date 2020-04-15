import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import covid19Reducer from '../features/covid19/covid19Slice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    covid19: covid19Reducer
  },
});
