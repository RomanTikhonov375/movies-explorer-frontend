import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header({ isLoggedIn }) {

    return (
        <header className='Header'>
            <Logo></Logo>
            <Navigation isLoggedIn={isLoggedIn}></Navigation>
        </header>
    );
};


export default Header;