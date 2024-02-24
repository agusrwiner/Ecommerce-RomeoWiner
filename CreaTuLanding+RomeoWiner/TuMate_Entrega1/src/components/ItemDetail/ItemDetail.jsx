import css from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../routing/context/cartContext';
import { NavLink, useNavigate } from 'react-router-dom';

const ItemDetail = ({ id, title, price, category, description, image, stock }) => {
    const item = { id, title, price, category, description, image, stock }
    const {addItem, isInCart} = useCartContext()
    const  navigate = useNavigate();

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
                {isInCart(id) ? (
                    <div className={`${css.buttonContainer}`}>
                        <NavLink to="/">
                            <button className={`${css.button}`}>Continuar comprando</button>
                        </NavLink>
                        <NavLink to="/cart">
                            <button className={`${css.button}`}>Ir al carrito</button>
                        </NavLink>
                    </div>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                )}
            </footer>
        </article>
    )
}

export default ItemDetail