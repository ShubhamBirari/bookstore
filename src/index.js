import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Loader from './components/Loader'
const LazyBookDetail = lazy(() => import('./pages/BookDetail'))
const LazyCheckout = lazy(() => import('./pages/Checkout'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<LazyBookDetail />} />
            <Route path="/checkout" element={<LazyCheckout />} />
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
reportWebVitals()
