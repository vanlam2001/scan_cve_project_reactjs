import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import spinnerSlice from './Toolkits/spinnerSlice.js'
import { Provider } from 'react-redux'
import userSlice from './Toolkits/userSlice.js'
import formSuccessSlice from './Toolkits/formSuccessSlice.js'
import passwordReset from './Toolkits/restPassword.js'

const store = configureStore({
  reducer: {
    spinnerSlice: spinnerSlice,
    userSlice: userSlice,
    formSuccessSlice: formSuccessSlice,
    passwordReset: passwordReset
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
