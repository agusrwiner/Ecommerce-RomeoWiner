import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, title, price, category, description, image, stock }) => {
    stock = 10

    return (
        <article className='card detail'>
            <header className='cardHeader'>
                <h2 className='cardH2'>{title}</h2>
                <p className='info'>{id}</p>
                <p className='info'>${price}</p> 
                <p className='info'>{category}</p>
                <p className='info'>{description}</p>
                <p className='info'>{stock}</p>
            </header>
            <picture className='cardPicture'>
                <img className='cardImg' src={image} alt={title} />
            </picture>
            <footer className='cardFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}` ) } />
            </footer>
        </article>
    )
}

export default ItemDetail