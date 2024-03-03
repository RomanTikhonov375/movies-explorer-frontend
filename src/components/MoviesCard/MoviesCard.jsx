import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';

import { getConvertTime } from '../../utils/timeConverter';
import { baseUrl } from '../../constans/constans';

/**
 * Represents a movie card component
 * @param {Object} props - The props object
 * @param {Object} props.movie - The movie object
 * @param {Function} props.createMovie - The function to create a movie
 * @param {Function} props.deleteMovie - The function to delete a movie
 * @param {Array} props.savedMoviesList - The list of saved movies
 */
function MoviesCard({movie, createMovie, deleteMovie, savedMoviesList}) {
  // Get the current location
  const location = useLocation();

  // Check if the movie is already saved
  const [isSave, setIsSave] = useState(savedMoviesList.some((savedMovie) => savedMovie.movieId === movie.id));

  // Destructure movie properties
  const { nameRU, duration, image, trailerLink, movieId  } = movie;


  // Function to create or delete a movie from saved list
  const createOrDeleteMovie = () => {
      if (!isSave) {
          // Create the movie and update state
          createMovie(movie)
          .then(() => setIsSave(true))
          .catch((err) => {
            console.error(err);
          });
      } else {
        // Delete the movie and update state
        
        deleteMovie(movie.id)
          .then(() => setIsSave(false))
          .catch((err) => {
            console.error(err);
          });
      }
    };
    
  // Function to delete a movie
  const deleteMovieHandler = () => {
      deleteMovie(movieId)
        .then((res) => {
          console.log(res.message);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    // Render the movie card
    return (
        <>
            <li className="moviesCard__item">
                <a href={trailerLink} target='_blank' rel='noreferrer'><img src={image.url ? `${baseUrl}${image.url}` : image} alt={`Кадр фильма ${nameRU}`} className='moviesCard__image' /></a>
                <div className="moviesCard__wrapper">
                    <h2 className="moviesCard__caption">{nameRU}</h2>
                    <p className="moviesCard__duratation">{getConvertTime(duration)}</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`${isSave ? 'moviesCard__already-save-button' : 'moviesCard__save-button'}`} onClick={createOrDeleteMovie}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={deleteMovieHandler}>Удалить из сохраненных</button>
                }
            </li>
        </>
    );

}

export default MoviesCard;