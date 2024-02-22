import { createContext, useContext, useState } from "react";

const cartContext = createContext()

export const { Provider } = cartContext

export const useCartContext = () => useContext(cartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [itemsTotal, setItemsTotal] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        setItemsTotal(
            itemsTotal + quantity
        )
        setTotal( total + item.price * quantity )

        if ( isInCart(item.id) ) {
            const auxCart = cart.map( cartItem => {
                if ( cartItem.item.id === item.id ) {
                    return{ 
                        ...cartItem, quantity: cartItem.quantity + quantity 
                    }
                }else{
                    return cartItem
                }
            } )
            
            setCart(auxCart)
        }else{
            setCart( [...cart, { item, quantity }] )
        }
    }

    const isInCart = id => cart.find( item => item.item.id === id )

    const contextValue = { cart, itemsTotal, total, addItem }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartProvider