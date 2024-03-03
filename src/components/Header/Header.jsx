import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header() {

    return (
        <header className='Header'>
            <Logo></Logo>
            <Navigation></Navigation>
        </header>
    );
};


export default Header;