import css from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = ()=> {
        if (quantity < stock) {
            setQuantity( quantity+1 );
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const handleClick = () => {
        onAdd(quantity);
    }

    return(
        <div className={`${css.counter}`}>
            <div className={`${css.controls}`}>
                <button className={`${css.button}`} onClick={decrement}>-</button>
                <h4 className={`${css.number}`}>{quantity}</h4>
                <button className={`${css.button}`} onClick={increment}>+</button>
            </div>
            <div className={`${css.controls} ${css.buttonsControls}`}>
                <button className={`${css.button}`} onClick={handleClick} disabled={stock <= 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount