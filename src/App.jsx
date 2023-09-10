import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { userRoute } from './routes/userRoute'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {userRoute.map((item, index) => {
            return <Route key={index} path={item.path} element={item.component} />
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App