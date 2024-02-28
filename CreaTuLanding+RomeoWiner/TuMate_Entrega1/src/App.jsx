import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartProvider from "./routing/context/cartContext";
import AuthProvider from "./routing/context/authContext";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <AuthProvider>
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
          <Route path='/checkout/:orderId' element={<div className="not_foundDIV"><Checkout/></div>} />
          <Route path='*' element={<div className="not_foundDIV"><h1 className="notFound">404 NOT FOUND</h1></div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  )
}

export default App