import css from './CartItemCount.module.css'
import { useState} from 'react'

const CartItemCount = ({ stock, initial, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initial);
    
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
            onQuantityChange(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1)
        }
    }

    const handleChange = (event) => {
        let value = parseInt(event.target.value);

        if (isNaN(value)) {
            value = 1; //If the value entered  is not a valid number, it is set to 1
        } else if (value <= 1) {
            value = 1; //If the value entered is less than 1, it is set to 1
        } else if (value >= stock) {
            value = stock; //If the value entered is more than the stock, it is set to the stock amount
        }

        setQuantity(value);
        onQuantityChange(value)
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