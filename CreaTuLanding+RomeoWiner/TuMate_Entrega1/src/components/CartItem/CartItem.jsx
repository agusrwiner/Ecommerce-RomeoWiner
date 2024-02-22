import css from './CartItem.module.css'

const CartItem = ( { item: { id, title, price, category, description, image, stock }, quantity } ) => {
    const totalPrice = price * quantity

    return (
        <article className={`${css.card}`}>
            <header className={`${css.cardHeader}`}>
                <div className={`${css.titleHolder}`}>
                    <h2 className={`${css.cardH2}`}>{title}</h2>
                </div>
                <p className={`${css.cardPrice}`}>Cantidad: {quantity}</p>
                <p className={`${css.cardPrice}`}>Precio por unidad: ${price}</p>
                <p className={`${css.cardPrice}`}>Subtotal: ${totalPrice}</p>
            </header>
            <picture className={`${css.cardPicture}`}>
                <img className={`${css.cardImg}`} src={image} alt={title} />
            </picture>
        </article>
    )
}

export default CartItem