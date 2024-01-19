import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {

    const location = useLocation();

    return (
        <section className="moviesCardList">
            <h2 className="moviesCardList__header">Список фильмов</h2>
            <ul className="moviesCard">
                <MoviesCard></MoviesCard>
            </ul>
           {location.pathname === '/movies' ? <button type='button' className="moviesCardList__more-button">Ещё</button> : null} 
        </section> 
    );
}

export default MoviesCardList;