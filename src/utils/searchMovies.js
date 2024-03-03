export const searchShortMovies = (movies, searchData) => {
    if (searchData) {
        return movies.filter((movie) => {
            return  movie.duration <= 40} )
    } else return movies
}

export const searchMoviesByName = (movies, searchData) => {
    return movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(searchData.toLowerCase().trim()) ||
        movie.nameEN.toLowerCase().includes(searchData.toLowerCase().trim())
    
     
    )
}