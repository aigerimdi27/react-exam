import { Link, NavLink } from 'react-router-dom'
import './Header.scss'


const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <a href="#" className='header__logo'>Womazing</a>
                        <nav className="header__link">
                            <NavLink to="/" className="header__links">Главная</NavLink>
                            <NavLink to="/shop" >Магазин</NavLink>
                        </nav>
                        <nav className="header__menu">
                            <a href="#">+7 (495) 823-54-12</a>
                        </nav>
                    </nav>
                   
                </div>
            </header>
        </>
    )
}

export default Header