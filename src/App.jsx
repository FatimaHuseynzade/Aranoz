import React from 'react'
import './assets/style.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Admin from '../Pages/Admin'
import Add from '../Pages/Add'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
    <BrowserRouter>
   <Routes>
    <Route element={<Home/>} path="/"></Route>
    <Route element={<Admin/>} path="/admin"></Route>
    <Route element={<Add/>} path="/add"></Route>
   </Routes>
   </BrowserRouter>

    </div>
  )
}

export default App