import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product'
import Card from './components/Card'

function App() {

  return (
    <div>
      <h1>Alışveriş Listem</h1>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/basket' element={<Card />} />
      </Routes>
    </div>
  )
}

export default App
