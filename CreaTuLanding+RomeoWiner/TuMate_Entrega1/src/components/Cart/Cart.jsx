import css from './Cart.module.css'
import CartItem from '../CartItem/CartItem'
import Spinner from '../Spinner/Spinner';
import  { useState } from "react";
import { useCartContext } from '../../routing/context/cartContext';


const Cart = () => {
    const [loading, setloading] = useState(false);
    const { cart, total, itemsTotal } = useCartContext()

    console.log(cart);

    return itemsTotal === 0 ? (
        <div className={`${css.cartListContainer}`}>
            <h1>Carrito vacio</h1>
        </div>
    ) : (
        <div className={`${css.cartListContainer}`}>
            <div className={`${css.cartItemList}`}>
                    {cart.map(
                        cartItems => <CartItem key={cartItems.item.id} {...cartItems.item }/>
                    )}
            </div>
            <div>Cantidad de items: {itemsTotal}</div>
            <div>Total: {total}</div>
        </div>
    )
}

export default Cart