import css from './LoginForm.module.css'
import { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if ( !isSigningIn ) {
            setIsSigningIn(true)
            await doSignInWIthEmailAndPassword( email, password )
        }
    }

    return(
        <div className={`${css.checlOutFormContainer}`}>
            <h2 className={`${css.formTitle}`}>Login</h2>
            <form className={`${css.form}`}>
                <div className={`${css.userBox}`}>
                    <input className='userInput' type="text" name="" required />
                    <label className='userLabel'>Email</label>
                </div>
                <div className={`${css.userBox}`}>
                    <input className='userInput' type="password" name="" required/>
                    <label className='userLabel'>Contraseña</label>
                </div>
            </form>
        </div>
    )
}

export default LoginForm