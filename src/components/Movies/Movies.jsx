import React, { useState, useEffect, useCallback } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { searchMoviesByName, searchShortMovies } from '../../utils/searchMovies';
import { getMovies } from '../../utils/MoviesApi';
import { windowSize, countMoviesToShow, indexToShow } from '../../constans/constans';

/**
 * Movies component for displaying and managing movies
 * @param {Object} props - The props object
 * @param {Function} props.setApiError - Function to set API error
 * @param {Function} props.createMovie - Function to create a new movie
 * @param {Function} props.deleteMovie - Function to delete a movie
 * @param {Array} props.savedMoviesList - Array of saved movies
 */


function Movies({ setApiError, createMovie, deleteMovie, savedMoviesList }) {
    // State variables
    const [isLoading, setIsLoading] = useState(false)
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [moviesFilter, setMoviesFilter] = useState(getStorageSearchRequest() || { request: '', isShort: false });
    const [moviesCount, setMoviesCount] = useState();
    const [moviesList, setMoviesList] = useState(getStorageMoviesSearch()?.slice(0, moviesCount) || []);
    const [isSearch, setIsSearch] = useState(false);

    // Function to handle window resize
    const handleResizeWindow = useCallback(() => {
        const width = window.innerWidth;
        let newMoviesCount;
        if (width <= windowSize.MOBILE_WIDTH) {
            newMoviesCount = countMoviesToShow.MOBILE_COUNT;
        } else if (width <= windowSize.TABLE_WIDTH) {
            newMoviesCount = countMoviesToShow.TABLE_COUNT;
        } else if (width <= windowSize.DESKTOP_WIDTH) {
            newMoviesCount = countMoviesToShow.DESKTOP_COUNT;
        } else {
            newMoviesCount = countMoviesToShow.WIDEDESK_COUNT;
        }
        setMoviesCount(newMoviesCount);

    }, []);

    // Effect to handle window resize
    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow);
        handleResizeWindow();
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, [handleResizeWindow])

    // Function to handle "Show More" button click
    const handleShowMore = useCallback(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= windowSize.MOBILE_WIDTH) {
            setMoviesCount(prev => prev + indexToShow.MOBILE_INDEX);
        } else if (windowWidth <= windowSize.TABLE_WIDTH) {
            setMoviesCount(prev => prev + indexToShow.TABLET_INDEX);
        } else if (windowWidth <= windowSize.DESKTOP_WIDTH) {
            setMoviesCount(prev => prev + indexToShow.DESKTOP_INDEX);
        } else {
            setMoviesCount(prev => prev + indexToShow.WIDEDESK_INDEX);
        }
    }, []);


    // Function to set search request in local storage
    const setStorageSearchRequest = useCallback((data) => {
        if (data) {
            localStorage.setItem('searchStorageRequest', JSON.stringify(data));
        }
    }, []);

    // Function to set searched movies in local storage
    const setStorageMoviesSearch = useCallback((searchedMovies) => {
        if (searchedMovies) {
            localStorage.setItem(`searchedStorageMovies`, JSON.stringify(searchedMovies));
        }
    }, []);

    // Function to get search request from local storage
    function getStorageSearchRequest() {
        return JSON.parse(localStorage.getItem('searchStorageRequest'))
    }

    // Function to get searched movies from local storage
    function getStorageMoviesSearch() {
        return JSON.parse(localStorage.getItem('searchedStorageMovies'))
    }

    // Effect to filter movies based on search request
    useEffect(() => {
        const searchedMovies = getStorageMoviesSearch();
        const searchRequest = getStorageSearchRequest();
        if (searchedMovies && searchedMovies.length !== 0 && searchedMovies) {
            filterMoviesHandler(searchedMovies, searchRequest);
        }
    }, []);

    // Effect to update local storage when searched movies change
    useEffect(() => {
        if (searchedMovies.length !== 0) {
            setStorageMoviesSearch(searchedMovies);
        }
    }, [searchedMovies]);

    // Function to filter movies based on search data
    const filterMoviesHandler = (movies, searchData) => {
        const filteredMoviesByName = searchMoviesByName(movies, searchData.request);
        setSearchedMovies(filteredMoviesByName);

        if (!searchData.isShort) {
            setMoviesToRender(filteredMoviesByName);
            setMoviesList(filteredMoviesByName)
        } else {

            const filteredMoviesByNameAndShort = searchShortMovies(filteredMoviesByName, searchData.isShort);
            setMoviesToRender(filteredMoviesByNameAndShort);
            setMoviesList(filteredMoviesByNameAndShort)
        }


        handleResizeWindow();
    };

    // Function to get movies from API
    const fetchMovies = useCallback(() => {
        setIsLoading(true);
        return getMovies();
    })

    // Function to handle search form submission
    const searchFormSubmitHandler = useCallback((data) => {
        const newMoviesFilter = { ...moviesFilter, request: data.search };
        setIsSearch(true);
        const movies = fetchMovies();
        movies.then((res) => {
            setMoviesFilter(newMoviesFilter);
            filterMoviesHandler(res, newMoviesFilter);
            setStorageSearchRequest(newMoviesFilter);
            setStorageMoviesSearch(moviesToRender);
        })
            .catch((err) => {
                console.error(err);
                setApiError(true);
            })
            .finally(() => setIsLoading(false));
    }, [moviesFilter, setApiError, filterMoviesHandler, setStorageSearchRequest, setStorageMoviesSearch, moviesToRender, setIsLoading]);

    // Function to handle "Short" checkbox change
    const isShortCheckboxHandler = (e) => {
        const newMoviesFilter = { ...moviesFilter, isShort: e.target.checked };
        setMoviesFilter(newMoviesFilter);
        setStorageSearchRequest(newMoviesFilter)
        const filteredMoviesByNameAndShort = searchShortMovies(searchedMovies, newMoviesFilter.isShort);
        setMoviesToRender(filteredMoviesByNameAndShort);
    };


    // Effect to update movies list based on movies to render and count
    useEffect(() => {
        setMoviesList(moviesToRender?.slice(0, moviesCount));
    }, [moviesToRender, moviesCount]);

    // Return JSX for Movies component
    return (
        <main className='movies'>
            <SearchForm
                searchFormSubmitHandler={searchFormSubmitHandler}
                isShortCheckboxHandler={isShortCheckboxHandler}
                moviesFilter={moviesFilter}
                isLoading={isLoading}>
            </SearchForm>

            {isLoading ? (<Preloader />) : (
                moviesList.length !== 0 ? (
                    <MoviesCardList
                        moviesList={moviesList}
                        createMovie={createMovie}
                        deleteMovie={deleteMovie}
                        savedMoviesList={savedMoviesList}
                        handleShowMore={handleShowMore}
                        moviesToRender={moviesToRender} />
                ) : null
            )}

            {isSearch && !isLoading && moviesList.length === 0 ? (<p className='movies__alert'>Ничего не найдено</p>) : null}

        </main>
    );

}

export default Movies;