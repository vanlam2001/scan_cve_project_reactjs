import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import spinnerSlice from './Toolkits/spinnerSlice.js'
import { Provider } from 'react-redux'
const store = configureStore({
  reducer: {
    spinnerSlice: spinnerSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
