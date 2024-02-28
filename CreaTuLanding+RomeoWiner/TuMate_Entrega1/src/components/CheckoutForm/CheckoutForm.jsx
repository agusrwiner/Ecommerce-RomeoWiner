import css from './CheckoutForm.module.css'
import { useCartContext } from '../../routing/context/cartContext';
import SignupForm from '../SignupForm/SignupForm';

const CheckoutForm = () => {
    const { total, itemsTotal } = useCartContext()

    return itemsTotal === 0 ? (
        <div className={`${css.checkOutContainer}`}>
            <h1 className={`${css.emptyCart}`}>Carrito vacio</h1>
        </div>
    ) : (
        <div className={`${css.checkOutContainer}`}>
            <div className={`${css.growLimit}`}>
                <SignupForm></SignupForm>
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
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm