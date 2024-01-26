import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { NavLink } from "react-router-dom";
import logo from './../../assets/02mateLogo.png'
// import './NavBar.js'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="growLimit growLimitNavbar">
                <div className="logoDIV">
                    <NavLink to='/'><img className="storeLogo" src={logo} alt="Logo" /></NavLink>
                </div>
                <ul className="tabs">
                    <li className="tab-LI">
                        <NavLink to='/productos' className="tab-LI-A" href="">Inicio</NavLink>
                    </li>
                    <li className="tab-LI">
                        <NavLink to='/productos/mates' className="tab-LI-A" href="">Mates</NavLink>
                    </li>
                    <li className="tab-LI">
                        <NavLink to='/productos/termos' className="tab-LI-A" href="">Termos</NavLink>
                    </li>
                    <li className="tab-LI">
                        <NavLink to='/productos/bombillas' className="tab-LI-A" href="">Bombillas</NavLink>
                    </li>
                </ul>
                <div className="widgets-DIV">
                    <CartWidget />
                    <div className="burger">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                </div>
            </div>

            <div className="exitModal"></div>
        </nav>
    )
}

export default NavBar