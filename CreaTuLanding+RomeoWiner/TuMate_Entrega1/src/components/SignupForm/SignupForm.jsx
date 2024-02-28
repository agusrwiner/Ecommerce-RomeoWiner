import { useState } from 'react'
import css from './SignupForm.module.css'
import { useAuthContext } from '../../routing/context/authContext';


import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore'; 
import { useCartContext } from '../../routing/context/cartContext';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { doCreateUserWithEmailAndPassword } = useAuthContext()

    const ordersCollection = collection(db, "orders");
    const { cart, clearCart } = useCartContext()
    const navigate = useNavigate();
    const order = {
        'cart': cart,
        'email': email
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()

        addDoc( ordersCollection,order ).then((docRef) => {
        alert(`Oreden realizada con exito! Numero de orden:: ${docRef.id}`)
        clearCart()
        navigate('/')
        }).catch((error) => {
            alert(`Ocurrio un error: ${error}`);
        });
    }

    return(
        <div className={`${css.checlOutFormContainer}`}>
            <h2 className={`${css.formTitle}`}>Complete su email</h2>
            <form  className={`${css.form}`}>
                <div className={`${css.userBox}`}>
                    <input className='userInput' onChange={ (e)=>setEmail(e.target.value) } type="text" name="" required />
                    <label className='userLabel'>Email</label>
                </div>
                <button onClick={handleSubmit} className={`${css.button}`}>Comprar</button>
            </form>
        </div>
    )
}

export default SignupForm