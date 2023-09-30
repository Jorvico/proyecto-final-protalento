import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './Pages/Home.jsx'

function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "" element={<Home />}/>
        </Routes>
        </BrowserRouter>
  )
}

export default MyRoutes 