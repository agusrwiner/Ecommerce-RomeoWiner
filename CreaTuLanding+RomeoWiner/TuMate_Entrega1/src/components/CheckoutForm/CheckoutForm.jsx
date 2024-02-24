import css from './CheckoutForm.module.css'
import { useCartContext } from '../../routing/context/cartContext';
import { NavLink } from 'react-router-dom';

const CheckoutForm = () => {
    const { cart, total, itemsTotal, clearCart } = useCartContext()

    return itemsTotal === 0 ? (
        <div className={`${css.checkOutContainer}`}>
            <h1>Carrito vacio</h1>
        </div>
    ) : (
        <div className={`${css.checkOutContainer}`}>
            <div className={`${css.growLimit}`}>
                <div className={`${css.checlOutFormContainer}`}>
                    <h2 className={`${css.formTitle}`}>Complete sus datos</h2>
                    <form className={`${css.form}`}>
                        <div className={`${css.userBox}`}>
                            <input className='userInput' type="text" name="" required/>
                            <label className='userLabel'>Nombre</label>
                        </div>
                        <div className={`${css.userBox}`}>
                            <input className='userInput' type="text" name="" required />
                            <label className='userLabel'>Apellido</label>
                        </div>
                        <div className={`${css.userBox}`}>
                            <input className='userInput' type="text" name="" required />
                            <label className='userLabel'>Email</label>
                        </div>
                        {/* <div className={`${css.userBox}`}>
                            <input className='userInput' type="password" name="" required/>
                            <label className='userLabel'>Contraseña</label>
                        </div> */}
                    </form>
                </div>
                <div className={`${css.priceboxContainer}`}>
                    <div className={`${css.titleContainer}`}>
                        <h3 className={`${css.title}`}>Resumen de compra</h3>
                    </div>
                    <div className={`${css.detailsContainer}`}>
                        <div className={`${css.productsAmountContainer}`}>
                            <span>Productos ({itemsTotal})</span>
                            <span>${total}</span>
                        </div>
                        <div className={`${css.productsAmountContainer}`}>
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>
                    <NavLink to={'/'}><button className={`${css.comprarBTN}`}>Comprar</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm