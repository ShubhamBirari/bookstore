import { createSlice } from '@reduxjs/toolkit'
import { booksList } from '../books'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: booksList,
    loader: true,
    selected: null
  },
  reducers: {
    selectItem: (state, action) => {
      state.selected = { ...action.payload }
    },
    selectedFilters: (state, action) => {
      if (action.payload === null) {
        state.filters = {
          edp: ''
        }
      } else {
        state.filters = action.payload
      }
    },
    setLoader: (state, action) => {
      state.loader = action.payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(getAllCapsules.fulfilled, (state, action) => {
    //   state.allCapsules = action?.payload?.allCapsules
    //   state.totalPages = action?.payload?.totalPages
    //   state.loader = false
    // })
  }
})

export const { setLoader, selectItem } = booksSlice.actions