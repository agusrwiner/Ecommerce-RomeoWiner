import css from './Spinner.module.css'

const Spinner = () => {
    return <div className={`${css.container}`}><span className={`${css.loader}`}></span></div>
}

export default Spinner