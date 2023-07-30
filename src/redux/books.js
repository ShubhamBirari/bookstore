import { createSlice } from '@reduxjs/toolkit'
import { booksList } from '../books'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: booksList,
    loader: true,
    selected: null,
    search: null,
    pageNo: 0
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
    setSearch: (state, action) => {
      state.search = action.payload
      state.pageNo = 0
    },
    setPageNo: (state, action) => {
      state.pageNo = action.payload
    },
    addToCart: (state, action) => {
      if (!action.payload.isItemInCart) {
        const { booksList } = JSON.parse(JSON.stringify(state))
        booksList.forEach((item) => {
          if (item.id === action.payload.id) {
            item.isItemInCart = true
            item.quantity = 1
          }
        })
        state.booksList = [...booksList]
        state.selected = { ...action.payload, isItemInCart: true, quantity: 1 }
      }
    },
    increaseQuantity: (state, action) => {
      const { booksList } = JSON.parse(JSON.stringify(state))

      booksList.forEach((item) => {
        if (item.id === action.payload.id && item.quantity < 10) {
          item.quantity = action.payload.quantity + 1
        }
      })

      state.booksList = [...booksList]
      state.selected = null
    },
    decreaseQuantity: (state, action) => {
      const { booksList } = JSON.parse(JSON.stringify(state))
      booksList.forEach((item) => {
        if (item.id === action.payload.id && item.quantity > 0) {
          item.quantity = action.payload.quantity - 1
        }
      })
      state.booksList = [...booksList]
      state.selected = null
    },
    removeItem: (state, action) => {
      if (action.payload.isItemInCart) {
        const { booksList } = JSON.parse(JSON.stringify(state))
        booksList.forEach((item) => {
          if (item.id === action.payload.id) {
            item.isItemInCart = false
            item.quantity = 0
          }
        })
        state.booksList = [...booksList]
      }
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

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  setLoader,
  selectItem,
  removeItem,
  setSearch,
  setPageNo
} = booksSlice.actions