import { configureStore } from '@reduxjs/toolkit'
import { contractorSlice } from './contractor'

export const store = configureStore({
  reducer: {
    contractor: contractorSlice.reducer
  },
})