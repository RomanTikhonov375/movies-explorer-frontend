import React from 'react';
import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';



function MoviesCardList({moviesList, createMovie, deleteMovie, savedMoviesList, handleShowMore, moviesToRender}) {

    const location = useLocation();

    return (
        <section className="moviesCardList">
            <h2 className="moviesCardList__header">Список фильмов</h2>
            <ul className="moviesCard">
                {moviesList.map((item) => <MoviesCard 
                key={item.id? item.id : item._id} 
                movie={item} 
                createMovie={createMovie} 
                deleteMovie={deleteMovie}
                savedMoviesList={savedMoviesList}/>)}
            </ul>
           {location.pathname === '/movies' && moviesList.length > 0 && moviesList?.length !== moviesToRender.length ? <button type='button' className="moviesCardList__more-button" onClick={handleShowMore}>Ещё</button> : null} 
        </section> 
    );
}

export default MoviesCardList;