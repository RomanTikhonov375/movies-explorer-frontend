import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { searchMoviesByName, searchShortMovies } from '../../utils/searchMovies';

/**
 * SavedMovies component displays a list of saved movies and provides search and filter functionality.
 * @param {object} props - The props object
 * @param {array} props.savedMoviesList - The list of saved movies
 * @param {function} props.deleteMovie - The function to delete a movie from the list
 */
function SavedMovies({ savedMoviesList, deleteMovie }) {
    // State for managing the movies filter
    const [moviesFilter, setMoviesFilter] = useState({ request: '', isShort: false });
    // State for managing the filtered movies list
    const [moviesList, setMoviesList] = useState([]);

    /**
     * Handler for filtering the movies based on search and short criteria
     * @param {array} movies - The list of movies to filter
     * @param {object} searchData - The search filter data
     */
    const filterMoviesHandler = (movies, searchData) => {
      let filteredMovies = searchMoviesByName(movies, searchData.request);
      if (searchData.isShort) {
        filteredMovies = searchShortMovies(filteredMovies, searchData.isShort);
      }
      setMoviesList(filteredMovies);
    };

    /**
     * Handler for submitting the search form
     * @param {object} data - The form data containing the search query
     */
    const searchFormSubmitHandler = (data) => {
      setMoviesFilter({ ...moviesFilter, request: data.search });
    };

    /**
     * Handler for the "isShort" checkbox
     * @param {object} e - The event object
     */
    const isShortCheckboxHandler = (e) => {
      setMoviesFilter({ ...moviesFilter, isShort: e.target.checked });
    };

    // Effect for filtering the movies list when there are changes in savedMoviesList or moviesFilter
    useEffect(() => {
      filterMoviesHandler(savedMoviesList, moviesFilter);
    }, [savedMoviesList, moviesFilter]);

    // Render the SavedMovies component
    return (
      <main className='savedMovies'>
        <h2 className="savedMovies__header">Список сохраненных фильмов</h2>
        <SearchForm
          searchFormSubmitHandler={searchFormSubmitHandler}
          isShortCheckboxHandler={isShortCheckboxHandler}
          moviesFilter={moviesFilter}
        ></SearchForm>
        <MoviesCardList
          moviesList={moviesList}
          savedMoviesList={savedMoviesList}
          deleteMovie={deleteMovie}
        ></MoviesCardList>
      </main>
    );

}

export default SavedMovies;