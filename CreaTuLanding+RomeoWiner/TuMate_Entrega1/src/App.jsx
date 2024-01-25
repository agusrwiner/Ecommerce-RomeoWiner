import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='appDiv'>
      <NavBar/>
      <ItemListContainer message={'Hola, en un futuro aqui se veran los productos'} />
      <ItemDetailContainer/>
    </div>
  )
}

export default App