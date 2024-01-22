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
                isLoggedIn ? (<nav className="navigation__btn-wrapper" >
                    <Link to='/signup' className="navigation__signup-button">Регистрация</Link>
                    <Link to='/signin' className="navigation__signin-button">Войти</Link>
                </nav>) : (<>
                    <nav className={`navigation ${isOpenMenu ? "" : "invisible"}`}>
                        <div className="navigation__navigation-wrapper">
                            {isOpenMenu ? (<NavLink to='/' className={({ isActive }) => "navigation__navigation-item " + (isActive ? "navigation__navigation-item_active" : "")}>Главная</NavLink>) : null}
                            <NavLink to='/movies' className={({ isActive }) => "navigation__navigation-item " + (isActive ? "navigation__navigation-item_active" : "")}>Фильмы</NavLink>
                            <NavLink to='/saved-movies' className={({ isActive }) => "navigation__navigation-item " + (isActive ? "navigation__navigation-item_active" : "")}>Сохранённые фильмы</NavLink>
                        </div>
                        <Link to='/profile' className="navigation__profile-button">Аккаунт</Link>

                    </nav>

                    <button className={`${isOpenMenu ? "navigation__burger-menu-close-btn" : ""} burger-menu`} onClick={() => setIsOpenMenu(!isOpenMenu)}></button>
                    <div className={`overlay`}>
                        <div className={`overlay__display ${isOpenMenu ? "overlay__display_block" : "overlay__display_none"}`}></div>
                    </div>
                </>)
            }</>

    );

}

export default Navigation;