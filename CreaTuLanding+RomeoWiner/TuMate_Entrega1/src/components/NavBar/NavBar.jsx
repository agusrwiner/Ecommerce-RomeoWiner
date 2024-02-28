import CartWidget from "../CartWidget/CartWidget";
import css from './NavBar.module.css'
import { NavLink } from "react-router-dom";
import logo from './../../assets/02mateLogo.png'
// import './NavBar.js'

const NavBar = () => {
    return (
        <nav className={`${css.navbar}`}>
            <div className={`${css.growLimit} ${css.growLimitNavbar}`}>
                <div className={`${css.logoDIV}`}>
                    <NavLink to='/home'><img className={`${css.storeLogo}`} src={logo} alt="Logo" /></NavLink>
                </div>
                <ul className={`${css.tabs}`}>
                    <li className={`${css.tabLI}`}>
                        <NavLink to='/home' className={`${css.tabLIA}`} href="">Inicio</NavLink>
                    </li>
                    <li className={`${css.tabLI}`}>
                        <NavLink to='/products/mate' className={`${css.tabLIA}`} href="">Mates</NavLink>
                    </li>
                    <li className={`${css.tabLI}`}>
                        <NavLink to='/products/termo' className={`${css.tabLIA}`} href="">Termos</NavLink>
                    </li>
                    <li className={`${css.tabLI}`}>
                        <NavLink to="/products/bombilla" className={`${css.tabLIA}`} href="">Bombillas</NavLink>
                    </li>
                </ul>
                <div className={`${css.widgetsDIV}`}>
                    <NavLink to={"cart"}> <CartWidget/> </NavLink>
                    <div className={`${css.burger}`}>
                        <div className={`${css.line} ${css.line1}`}></div>
                        <div className={`${css.line} ${css.line2}`}></div>
                        <div className={`${css.line} ${css.line3}`}></div>
                    </div>
                </div>
            </div>

            <div className={`${css.exitModal}`}></div>
        </nav>
    )
}

export default NavBar