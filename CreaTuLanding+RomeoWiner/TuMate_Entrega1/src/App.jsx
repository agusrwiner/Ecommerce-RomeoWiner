import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='appDiv'>
      <NavBar/>
      <ItemListContainer message={'Hola, en un futuro aqui se veran los productos'} />
      {/* <ItemCount initial={1} stock={10} onAdd={ (quantity) => console.log('Cantidad agregada: ', quantity) } /> */}
    </div>
  )
}

export default App