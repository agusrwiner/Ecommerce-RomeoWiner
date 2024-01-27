import { NavLink } from 'react-router-dom'
import css from  './Item.module.css'

const Item = ({id, title, price, category, description, image}) => {
    return(
        <article className={`${css.card}`}>
            <header className={`${css.cardHeader}`}>
                <h2 className={`${css.cardH2}`}>{title}</h2>
                <p className={`${css.cardPrice}`}>${price}</p>
            </header>
            <picture className={`${css.cardPicture}`}>
                <img className={`${css.cardImg}`} src={image} alt={title}/>
            </picture>
            <footer className={`${css.cardFooter}`}>
                <NavLink to={`/product/${id}`} className={`${css.cardSeeDetail}`}>Ver Mas</NavLink>
            </footer>
        </article>
    )
}

export default Item