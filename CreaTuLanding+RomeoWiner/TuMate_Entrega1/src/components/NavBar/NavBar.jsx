import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import './NavBar.js'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="growLimit growLimitNavbar">
                <div className="logoDIV">
                    <h3 className="storeTitle">TuMate</h3>
                </div>
                <ul className="tabs">
                    <li className="tab-LI">
                        <a className="tab-LI-A" href="">Inicio</a>
                    </li>
                    <li className="tab-LI">
                        <a className="tab-LI-A" href="">Mates</a>
                    </li>
                    <li className="tab-LI">
                        <a className="tab-LI-A" href="">Termos</a>
                    </li>
                    <li className="tab-LI">
                        <a className="tab-LI-A" href="">Bombillas</a>
                    </li>
                    <li className="tab-LI">
                        <a className="tab-LI-A" href="">Contacto</a>
                    </li>
                </ul>
                <div className="widgets-DIV">
                    <div className="burger">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                    <CartWidget />
                </div>
            </div>

            <div className="exitModal"></div>
        </nav>
    )
}

export default NavBar