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
                <button className='card-seeDetail'>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item