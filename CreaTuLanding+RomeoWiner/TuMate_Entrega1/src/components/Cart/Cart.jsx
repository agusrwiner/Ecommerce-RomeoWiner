import css from './Cart.module.css'
import CartItem from '../CartItem/CartItem'
import { useCartContext } from '../../routing/context/cartContext';
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const { cart, total, itemsTotal, clearCart } = useCartContext()

    return itemsTotal === 0 ? (
        <div className={`${css.cartListContainer}`}>
            <h1 className={`${css.notFound}`}>Carrito vacio</h1>
        </div>
    ) : (
        <div className={`${css.cartListContainer}`}>
            <div className={`${css.growLimit}`}>
                <div className={`${css.cartItemList}`}>
                    {cart.map(cartItems =>
                        <CartItem
                            key={cartItems.item.id}
                            item={cartItems.item}
                            quantity={cartItems.quantity}
                        />
                    )}
                    <div className={`${css.cartTitleContainer}`}>
                        <NavLink to="/">
                            <button className={`${css.continuarCompraBTN}`}>Continuar comprando</button>
                        </NavLink>
                        <button className={`${css.vaciarCarritoBTN}`} onClick={clearCart}>Vaciar carrito</button>
                    </div>
                </div>
                <div className={`${css.priceboxContainer}`}>
                    <div className={`${css.titleContainer}`}>
                        <h3 className={`${css.title}`}>Resumen de compra</h3>                        
                    </div>
                    <div className={`${css.detailsContainer}`}>
                        <div className={`${css.productsAmountContainer}`}>
                            <span>Productos ({itemsTotal})</span>
                            <span>${total}</span>
                        </div>
                        <div className={`${css.productsAmountContainer}`}>
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>
                        <NavLink to={'/checkout'}><button className={`${css.continuarCompraBTN}`}>Continuar compra</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Cart