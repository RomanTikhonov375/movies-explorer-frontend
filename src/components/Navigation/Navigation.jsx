import React from 'react';
import { Link, useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

function Navigation({ isLoggedIn }) {
    const location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    useEffect(() => { setIsOpenMenu(false) }, [location.pathname])
    return (
        <>
            {
                isLoggedIn ? (<div className="navigation__btn-wrapper" >
                    <Link to='/signup' className="navigation__signup-button">Регистрация</Link>
                    <Link to='/signin' className="navigation__signin-button">Войти</Link>
                </div>) : (<>
                    <nav className={`navigation__navigation ${isOpenMenu ? "" : "navigation__navigation-invisible"}`}>
                        <div className="navigation__navigation-wrapper">
                            {isOpenMenu ? (<NavLink to='/' className={({ isActive }) => "navigation__navigation-item " + (isActive ? "navigation__navigation-item_active" : "")}>Главная</NavLink>) : null}
                            <NavLink to='/movies' className={({ isActive }) => "navigation__navigation-item " + (isActive ? "navigation__navigation-item_active" : "")}>Фильмы</NavLink>
                            <NavLink to='/saved-movies' className={({ isActive }) => "navigation__navigation-item " + (isActive ? "navigation__navigation-item_active" : "")}>Сохранённые фильмы</NavLink>
                        </div>
                        <Link to='/profile' className="navigation__profile-button">Аккаунт</Link>

                    </nav>

                    <button className={`${isOpenMenu ? "navigation__burger-menu-close-btn" : ""}  navigation__burger-menu`} onClick={() => setIsOpenMenu(!isOpenMenu)}></button>
                    <div className={`${isOpenMenu ? "navigation__navigation-overlay" : "navigation__navigation-overlay-display-none"}`}></div>
                </>)
            }</>

    );

}

export default Navigation;