import css from './CheckoutForm.module.css'
import { useCartContext } from '../../routing/context/cartContext';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

const CheckoutForm = () => {
    const { cart, total, itemsTotal, clearCart } = useCartContext()

    return itemsTotal === 0 ? (
        <div className={`${css.checkOutContainer}`}>
            <h1>Carrito vacio</h1>
        </div>
    ) : (
        <div className={`${css.checkOutContainer}`}>
            <div className={`${css.growLimit}`}>
                <LoginForm></LoginForm>
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
                    <NavLink to={'/'}><button className={`${css.comprarBTN}`}>Comprar</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm