import { configureStore } from '@reduxjs/toolkit'
import { booksSlice } from './books'

export const store = configureStore({
  reducer: booksSlice
})
