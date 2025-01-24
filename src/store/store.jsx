import { configureStore } from '@reduxjs/toolkit'
import  loadingReducer  from './reducer/loadingReducer'

export default configureStore({
  reducer: {
    showLoading:loadingReducer
  },
})

