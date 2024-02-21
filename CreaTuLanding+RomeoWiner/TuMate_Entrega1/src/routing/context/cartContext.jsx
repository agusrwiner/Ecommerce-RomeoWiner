import { createContext, useContext, useState } from "react";

const cartContext = createContext()

export const { Provider } = cartContext

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const contextValue = {cart}

    return <Provider value={{ contextValue }}>{children}</Provider>
}

export default CartProvider