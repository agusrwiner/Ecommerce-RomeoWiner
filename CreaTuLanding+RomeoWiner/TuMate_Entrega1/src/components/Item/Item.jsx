import './Item.css'

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>{name}</h2>
            </header>
            <picture>
                <img className='itemImg' src={img} alt={name}/>
            </picture>
            <section>
                <p className='info'>
                    Precio: ${price}
                </p>
                <p className='info'>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                <button className='option'>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item