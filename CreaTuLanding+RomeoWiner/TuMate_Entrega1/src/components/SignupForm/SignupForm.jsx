import { useState } from 'react'
import css from './SignupForm.module.css'
import { useAuthContext } from '../../routing/context/authContext';

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { doCreateUserWithEmailAndPassword } = useAuthContext()

    const handleSubmit = async ()=> {
        const result = await doCreateUserWithEmailAndPassword(email, password);
        alert(result);
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
                <button onClick={handleSubmit}>Registrarme</button>
            </form>
        </div>
    )
}

export default SignupForm