import { NavLink } from 'react-router-dom'
import './Item.css'

const Item = ({id, title, price, category, description, image}) => {
    return(
        <article className='card'>
            <header className='cardHeader'>
                <h2 className='cardH2'>Titulo</h2>
                <p className='info'>${price}</p>
            </header>
            <picture className='cardPicture'>
                <img className='cardImg' src={image} alt={title}/>
            </picture>
            <footer className='cardFooter'>
                <NavLink to={`/product/${id}`} className='card-seeDetail'>Ver Mas</NavLink>
            </footer>
        </article>
    )
}

export default Item