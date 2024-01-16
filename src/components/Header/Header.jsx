import React from 'react';
import Navigation from '../Navigation/Navigation';


function Header({ isLoggedIn }) {

    return (
        <header className='Header'>
            <div className="logo"></div>
            <Navigation isLoggedIn={isLoggedIn}></Navigation>
        </header>
    );
};


export default Header;