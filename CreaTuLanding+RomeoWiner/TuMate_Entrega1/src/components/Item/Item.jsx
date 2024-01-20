import './Item.css'

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className='card'>
            <header className='cardHeader'>
                <h2 className='cardH2'>{name}</h2>
                <p className='info'>${price}</p>
            </header>
            <picture className='cardPicture'>
                <img className='cardImg' src={img} alt={name}/>
            </picture>
            <footer className='cardFooter'>
                <button className='card-seeDetail'>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item