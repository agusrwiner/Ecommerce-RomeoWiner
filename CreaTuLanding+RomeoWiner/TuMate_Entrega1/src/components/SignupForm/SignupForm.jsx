import { useState } from 'react'
import css from './SignupForm.module.css'
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore'; 
import { useCartContext } from '../../routing/context/cartContext';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const ordersCollection = collection(db, "orders");
    const { cart, clearCart, total, itemsTotal } = useCartContext()
    const navigate = useNavigate();
    const order = {
        'items': cart,
        'total': total,
        'itemsTotal': itemsTotal,
        'name': name,
        'surname': surname,
        'email': email
    }

    const createOrder = async (e)=> {
        e.preventDefault()

        addDoc( ordersCollection,order ).then((docRef) => {
            const orderId = docRef.id
            clearCart()
            navigate(`/checkout/${orderId}`)
        }).catch((error) => {
            console.log(`Ocurrio un error: ${error}`);
        });
    }

    return(
        <div className={`${css.checlOutFormContainer}`}>
            <h2 className={`${css.formTitle}`}>Complete su email</h2>
            <form className={`${css.form}`}>
                <div className={`${css.userBox}`}>
                    <input className='userInput' onChange={(e) => setSurname(e.target.value)} type="text" name="" required />
                    <label className='userLabel'>Apellido</label>
                </div>
                <div className={`${css.userBox}`}>
                    <input className='userInput' onChange={(e) => setName(e.target.value)} type="text" name="" required />
                    <label className='userLabel'>Nombre</label>
                </div>
                <div className={`${css.userBox}`}>
                    <input className='userInput' onChange={(e) => setEmail(e.target.value)} type="text" name="" required />
                    <label className='userLabel'>Email</label>
                </div>
                <button onClick={createOrder} className={`${css.button}`} type='submit' >Comprar</button>
            </form>
        </div>
    )
}

export default SignupForm