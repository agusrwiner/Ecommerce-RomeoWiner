import css from './LoginForm.module.css'

const LoginForm = () => {
    return(
        <div className={`${css.checlOutFormContainer}`}>
            <h2 className={`${css.formTitle}`}>Complete sus datos</h2>
            <form className={`${css.form}`}>
                <div className={`${css.userBox}`}>
                    <input className='userInput' type="text" name="" required />
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
    )
}

export default LoginForm