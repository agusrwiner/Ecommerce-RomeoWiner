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

    const clearCart = () => {
        setCart( [] )
        setItemsTotal(0)
        setTotal(0)
    }

    const updateItem = (id, quantity) => {

    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter((cartItem) => cartItem.item.id !== id);

        setCart(updatedCart);

        // Recalcula el total de ítems y el precio total
        const newItemsTotal = updatedCart.reduce((acc, currentItem) => acc + currentItem.quantity, 0);
        const newTotal = updatedCart.reduce((acc, currentItem) => acc + currentItem.item.price * currentItem.quantity, 0);

        // Actualiza los estados de itemsTotal y total
        setItemsTotal(newItemsTotal);
        setTotal(newTotal);
    }

    const isInCart = id => cart.find( item => item.item.id === id )

    const contextValue = { cart, itemsTotal, total, addItem, clearCart, deleteItem }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartProvider