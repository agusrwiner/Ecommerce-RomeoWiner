import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartProvider from "./routing/context/cartContext";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/home' element={<ItemListContainer />} />
          <Route path='/products/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutForm/>} />
          <Route path='*' element={<div className="not_foundDIV"><h1 className="notFound">404 NOT FOUND</h1></div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App