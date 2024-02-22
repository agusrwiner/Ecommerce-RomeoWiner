import css from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../routing/context/cartContext';

const ItemDetail = ({ id, title, price, category, description, image, stock }) => {
    stock = 10
    const item = { id, title, price, category, description, image, stock }
    const {addItem} = useCartContext()

    const onAdd = count => {
        addItem(item,count)
    }

    return (
        <article className={`${css.card}`}>
            <header className={`${css.cardHeader}`}>
                <h2 className={`${css.cardH2}`}>{title}</h2>
                <p className={`${css.cardDesc}`}>{description}</p>
                <p className={`${css.price}`}>${price}</p>
            </header>
            <picture className={`${css.cardPicture}`}>
                <img className={`${css.cardImg}`} src={image} alt={title} />
            </picture>
            <footer className={`${css.cardFooter}`}>
                <ItemCount initial={1} stock={stock} onAdd={ onAdd } />
            </footer>
        </article>
    )
}

export default ItemDetail