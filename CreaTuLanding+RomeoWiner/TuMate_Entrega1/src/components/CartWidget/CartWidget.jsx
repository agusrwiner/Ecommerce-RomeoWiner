import css from './CartWidget.module.css'
import cart from './../../assets/cart.svg';
import { useCartContext } from '../../routing/context/cartContext';

const CartWidget = () => {
    const {itemsTotal} = useCartContext()

    return (
        <div className={`${css.container}`}>
            <img className={`${css.svg}`} src={cart} alt="" />
            <p className={`${css.totalItems}`}>{itemsTotal}</p>
        </div>
    )
}

export default CartWidget