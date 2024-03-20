import CartWidget from "../CartWidget/CartWidget";
import css from './NavBar.module.css'
import { NavLink } from "react-router-dom";
import logo from './../../assets/02mateLogo.png'

const NavBar = () => {
    const handleClick = e => {
        if (e.target.matches('.activeMobile a')) {
            console.log('Matches', e.target);
            window.scroll(0, 0)
            toggleNavbar()
        }else{
            console.log( 'Does not match',e.target );
            toggleNavbar()
        }
    }

    const toggleNavbar = event => {
        const navbar = document.querySelector('#navbar');
        const mobileTabs = document.getElementById( 'mobileTabs' )
        const burger = document.getElementById('burger')
        const line1 = document.querySelector('#line1');
        const line2 = document.querySelector('#line2');
        const line3 = document.querySelector('#line3');

        mobileTabs.classList.toggle( 'activeMobile' );
        if (mobileTabs.ariaHidden == 'true' ) {
            mobileTabs.ariaHidden = false
            navbar.addEventListener('click',handleClick)
        } else if (mobileTabs.ariaHidden == 'false' ) {
            mobileTabs.ariaHidden = true
            navbar.removeEventListener('click',handleClick)
        }
        
        burger.classList.toggle('burgerActive');
        line1.classList.toggle('activeLine1');
        line2.classList.toggle('activeLine2');
        line3.classList.toggle('activeLine3');
    }

    return (
        <nav id="navbar" className={`${css.navbar}`}>
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
                <ul id="mobileTabs" className={`${css.mobileTabs}`} aria-hidden='true' > 
                    <li className={`${css.mobileTabLI}`}>
                        <NavLink to='/home' className={`${css.mobileTabLIA}`} href="">Inicio</NavLink>
                    </li>
                    <li className={`${css.mobileTabLI}`}>
                        <NavLink to='/products/mate' className={`${css.mobileTabLIA}`} href="">Mates</NavLink>
                    </li>
                    <li className={`${css.mobileTabLI}`}>
                        <NavLink to='/products/termo' className={`${css.mobileTabLIA}`} href="">Termos</NavLink>
                    </li>
                    <li className={`${css.mobileTabLI}`}>
                        <NavLink to="/products/bombilla" className={`${css.mobileTabLIA}`} href="">Bombillas</NavLink>
                    </li>
                </ul>
                <div className={`${css.widgetsDIV}`}>
                    <NavLink to={"cart"}> <CartWidget/> </NavLink>
                    <div id="burger" className={`${css.burger}`} onClick={toggleNavbar}>
                        <div id="line1" className={`${css.line}`}></div>
                        <div id="line2" className={`${css.line}`}></div>
                        <div id="line3" className={`${css.line}`}></div>
                    </div>
                </div>
            </div>

            <div className={`${css.exitModal}`}></div>
        </nav>
    )
}

export default NavBar