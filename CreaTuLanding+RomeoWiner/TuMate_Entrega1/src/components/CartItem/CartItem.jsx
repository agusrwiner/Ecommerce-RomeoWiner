import css from './CartItem.module.css'

const CartItem = ( { item: { id, title, price, category, description, image, stock }, quantity } ) => {
    const totalPrice = price * quantity

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
                ItemCount
            </div>
            <div className={`${css.itemActions}`}>
                Eliminar
            </div>
        </article>
    )
}

export default CartItem