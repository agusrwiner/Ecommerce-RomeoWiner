import css from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, title, price, category, description, image, stock }) => {
    stock = 10

    return (
        <article className={`${css.card}`}>
            <header className={`${css.cardHeader}`}>
                <h2 className={`${css.cardH2}`}>{title}</h2>
                <p className={`${css.cardDesc}`}>{description}</p>
                <p className={`${css.info}`}>${price}</p>
            </header>
            <picture className={`${css.cardPicture}`}>
                <img className={`${css.cardImg}`} src={image} alt={title} />
            </picture>
            <footer className='cardFooter'>
                <ItemCount initial={1} stock={stock} onAdd={ (quantity) => console.log(`Agregaste: ${quantity} ${title} al carrito` ) } />
            </footer>
        </article>
    )
}

export default ItemDetail