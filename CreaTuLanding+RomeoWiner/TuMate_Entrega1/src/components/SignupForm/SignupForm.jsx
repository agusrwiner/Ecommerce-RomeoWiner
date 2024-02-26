import { useState } from 'react'
import css from './SignupForm.module.css'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = ()=> {
        console.log(email, password);
    }

    return(
        <div className={`${css.checlOutFormContainer}`}>
            <h2 className={`${css.formTitle}`}>Sign up</h2>
            <form className={`${css.form}`}>
                <div className={`${css.userBox}`}>
                    <input className='userInput' onChange={ (e)=>setEmail(e.target.value) } type="text" name="" required />
                    <label className='userLabel'>Email</label>
                </div>
                <div className={`${css.userBox}`}>
                    <input className='userInput' onChange={(e) => setPassword(e.target.value)} type="password" name="" required/>
                    <label className='userLabel'>Contraseña</label>
                </div>
                <button onClick={submit}>Registrarme</button>
            </form>
        </div>
    )
}

export default SignupForm