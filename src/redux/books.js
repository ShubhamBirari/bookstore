import { createSlice } from '@reduxjs/toolkit'
import { booksList } from '../books'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: booksList,
    loader: true,
    isModalOpen: false,
    params: {
      offset: 0,
      limit: 9,
      status: '',
      mission: '',
      type: ''
    },
    totalPages: 0,
    selected: null,
    filters: {
      edp: ''
    }
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
    },
    toggleModal: (state, action) => {
      state.isModalOpen = action.payload
    },
    setPageNo: (state, action) => {
      state.params = { ...state.params, pageNo: action.payload }
    },
    setPageSize: (state, action) => {
      state.params = { ...state.params, pageSize: action.payload }
    },
    setParam: (state, action) => {
      state.params = { ...state.params, ...action.payload }
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
