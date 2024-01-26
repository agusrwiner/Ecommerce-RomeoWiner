import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/products/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App