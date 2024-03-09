import { SHORT_FILM_DURATION } from "../constans/constans"

export const searchShortMovies = (movies, searchData) => {
    if (searchData) {
        return movies.filter((movie) => {
            return  movie.duration <= SHORT_FILM_DURATION} )
    } else return movies
}

export const searchMoviesByName = (movies, searchData) => {
    return movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(searchData.toLowerCase().trim()) ||
        movie.nameEN.toLowerCase().includes(searchData.toLowerCase().trim())
    
     
    )
}