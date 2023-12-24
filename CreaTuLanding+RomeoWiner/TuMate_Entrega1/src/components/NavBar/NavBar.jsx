import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import logo from './Assets/02mateLogo.png'
// import './NavBar.js'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="growLimit growLimitNavbar">
                <div className="logoDIV">
                    {/* <h3 className="storeTitle">TuMate</h3> */}
                    <img className="storeLogo" src={logo} alt="Logo" />
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