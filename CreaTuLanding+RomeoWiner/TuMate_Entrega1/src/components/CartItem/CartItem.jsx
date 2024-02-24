import css from './CartItem.module.css'
import CartItemCount from '../CartItemCount/CartItemCount'
import { useCartContext } from '../../routing/context/cartContext';

const CartItem = ( { item: { id, title, price, category, description, image, stock }, quantity } ) => {
    const totalPrice = price * quantity
    const { updateItem, deleteItem } = useCartContext()

    const handleDelete = () => {
        deleteItem(id)
    }
    
    const handleQuantityChange = (newQuantity) => {
        updateItem(id, newQuantity);
    }

    return (
        <article className={`${css.card}`}>
            <header className={`${css.itemHeader}`}>
                <picture className={`${css.cardPicture}`}>
                    <img className={`${css.cardImg}`} src={image} alt={title} />
                </picture>
                <div className={`${css.itemCartInfo}`}>
                    <h2 className={`${css.cardH2}`}>{title}</h2>
                    <div className={`${css.itemPriceContainer}`}>
                        ${totalPrice}<br/>
                        ({price} por unidad)
                    </div>
                </div>
            </header>
            <div className={`${css.cartItemCountContainer}`}>
                <CartItemCount initial={quantity} stock={stock} onQuantityChange={handleQuantityChange}></CartItemCount>
            </div>
            <div className={`${css.itemActions}`}>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </article>
    )
}

export default CartItem