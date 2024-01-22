import React from 'react';

function Footer() {

    return (
        <footer className='footer'>
            <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__wrapper">
                <p className="footer__copyright">&copy; 2024</p>
                <ul className="footer__list">
                    <li className="footer__list-item"><a target='_blank' rel='noreferrer' href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__list-item"><a target='_blank' rel='noreferrer' href="https://github.com/RomanTikhonov375" className="footer__link">Github</a></li>
                </ul>
            </div>
        </footer>
    );

}

export default Footer;