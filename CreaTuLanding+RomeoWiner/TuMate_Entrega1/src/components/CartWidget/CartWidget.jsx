import './CartWidget.css'
import cart from './../../assets/cart.svg';

const CartWidget = () => {
    return (
        <div className='cartDIV'>
            <img className='cartSVG' src={cart} alt="" />
            <p>0</p>
        </div>
    )
}

export default CartWidget