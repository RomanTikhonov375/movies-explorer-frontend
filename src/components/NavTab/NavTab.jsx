import React from 'react';

function NavTab() {

    return (
        <nav className='navTab'>
            <ul className="navTab__navigation">
                <li className="navTab__navigation-item"><a href="#about-project" className="navTab__navigation-link"> О проекте</a></li>
                <li className="navTab__navigation-item"><a href="#techs" className="navTab__navigation-link">Технологии</a> </li>
                <li className="navTab__navigation-item"><a href="#about-me" className="navTab__navigation-link">Студент</a> </li>
            </ul>
        </nav>
    );

}

export default NavTab;