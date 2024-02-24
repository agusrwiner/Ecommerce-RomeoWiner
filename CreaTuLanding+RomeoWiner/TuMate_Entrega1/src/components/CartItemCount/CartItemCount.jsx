import css from './CartItemCount.module.css'
import { useState } from 'react'

const CartItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const handleChange = (event) => {
        let value = parseInt(event.target.value);

        if (isNaN(value)) {
            value = 1; // Si el valor ingresado no es un número válido, se establece en 1
        } else if (value <= 1) {
            value = 1; // Si el valor ingresado es menor que 1, se establece en 1
        } else if (value >= stock) {
            value = stock; // Si el valor ingresado es mayor que el stock, se establece en el stock máximo
        }

        setQuantity(value);
    }

    return (
        <div className={`${css.counter}`}>
            <div className={`${css.controls}`}>
                <button className={`${css.button}`} onClick={decrement}>-</button>
                <input className={`${css.input}`} type='number' min={1} max={stock} onChange={handleChange} value={quantity}></input>
                <button className={`${css.button}`} onClick={increment}>+</button>
            </div>
            <p className={`${css.stockDisponible}`}>{stock} disponibles</p>
        </div>
    )
}

export default CartItemCount