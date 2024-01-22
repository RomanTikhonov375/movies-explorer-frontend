import React from 'react';

function Portfolio() {

    return (
        <section className="portfolio">
            <div className="portfolio__wrapper">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className='portfolio__list-item'><a target='_blank' rel='noreferrer' href="https://github.com/RomanTikhonov375/how-to-learn" className="portfolio__link">Статичный сайт<span>↗</span></a></li>
                    <li className='portfolio__list-item'><a target='_blank' rel='noreferrer' href="https://github.com/RomanTikhonov375/russian-travel" className="portfolio__link">Адаптивный сайт<span>↗</span></a></li>
                    <li className='portfolio__list-item'><a target='_blank' rel='noreferrer' href="https://github.com/RomanTikhonov375/react-mesto-api-full-gha" className="portfolio__link">Одностраничное приложение<span>↗</span></a></li>
                </ul>
            </div>
        </section>
    );
}


export default Portfolio;