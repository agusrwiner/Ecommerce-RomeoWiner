import css from './CartItem.module.css'

const CartItem = ( { item, quantity } ) => {
    // ({ id, title, price, category, description, image }  = item)

    return (
        <article className={`${css.card}`}>
            <header className={`${css.cardHeader}`}>
                <div className={`${css.titleHolder}`}>
                    <h2 className={`${css.cardH2}`}>{item.title}</h2>
                </div>
                <p className={`${css.cardPrice}`}>${item.price}</p>
            </header>
            <picture className={`${css.cardPicture}`}>
                <img className={`${css.cardImg}`} src={item.image} alt={item.title} />
            </picture>
            <div>
                Quantity: {quantity}
            </div>
        </article>
    )
}

export default CartItem