import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {

    return (
        <main className='savedMovies'>
            <h2 className="savedMovies__header">Список сохраненных фильмов</h2>
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
        </main>
    );

}

export default SavedMovies;