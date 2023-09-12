import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import spinnerSlice from './Toolkits/spinnerSlice.js'
import { Provider } from 'react-redux'
import userSlice from './Toolkits/userSlice.js'
const store = configureStore({
  reducer: {
    spinnerSlice: spinnerSlice,
    userSlice: userSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
