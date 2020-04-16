import { configureStore } from '@reduxjs/toolkit';
import covid19Reducer from '../features/covid19/covid19Slice'

export default configureStore({
  reducer: {
    covid19: covid19Reducer
  },
});
