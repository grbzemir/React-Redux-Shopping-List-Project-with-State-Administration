import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Product from './Components/Products.component'
import Basket from './Components/basket-cart.component'

function App() {
  return (
    <div className='App'>
      <h1>Alışveriş Listesi</h1>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='basket' element={<Basket />} />
      </Routes>
    </div>
  )
}

export default App
