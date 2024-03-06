
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import { mainApi } from '../../utils/MainApi';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import PageLayout from '../PageLayout/PageLayout'
import { BASE_URL } from '../../constans/constans';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [apiError, setApiError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();



  // Callback for Login summit button
  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    const res = await mainApi.login({ email, password });
    if (res.token) {
      localStorage.setItem('jwt', res.token);
      setLoggedIn(true);
      navigate('/movies');
    }

  }

  // Callback for Register summit button
  const handleRegister = async ({ name, email, password }) => {
    setIsLoading(true);
    const res = await mainApi.register({ name, email, password });
    if (res._id) {
      handleLogin({ email, password });
    }
  }

  // Callback for updating user profile
  const handleUpdateUser = async ({ name, email }) => {
      setIsLoading(true);
      const res = await mainApi.editingProfile({ name, email });
      setCurrentUser(res);
      console.log(res);
  }

  // Callback for user logout
  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    navigate('/');
  }

  // Fetch user info and movies on login
  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const [userInfo, userMovies] = await Promise.all([mainApi.getUserInfo(), mainApi.getMovies()]);
          setCurrentUser(userInfo);
          setSavedMoviesList(userMovies);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [isLoggedIn]);

  // Check authentication token on app load
  const authCkeck = async (jwt) => {
    const path = location.pathname;
    try {
      await mainApi.checkToken(jwt);
      setLoggedIn(true);
      localStorage.setItem('loggedIn', 'true');
    } catch (error) {
      console.error(error);
      navigate(path, { replace: true });
    }
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      authCkeck(jwt);
    }
  }, []);

  // Create a movie
  const createMovie = (movie) => {
    const {
      country,
      director,
      duration,
      year,
      description,
      image: { url, formats },
      trailerLink,
      id: movieId,
      nameRU,
      nameEN } = movie

    return mainApi.setUserMovie({
      country,
      director,
      duration,
      year,
      description,
      image: `${BASE_URL}${url}`,
      trailerLink,
      movieId,
      nameRU,
      nameEN,
      thumbnail: `${BASE_URL}${formats.thumbnail.url}`
    }).then((movieData) => {
      setSavedMoviesList([...savedMoviesList, movieData]);
    });
  }

  // Delete a movie
  const deleteMovie = (movieId) => {;
    const savedMovie = savedMoviesList.find((item) => item.movieId === movieId);
    return mainApi.deleteMovie(savedMovie._id).then((res) => {
      setSavedMoviesList(savedMoviesList.filter((movie) => movie._id !== savedMovie._id));
      return res;
    });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }} >
      <div className="App">
        <Routes>
          <Route path="/" element={
            <PageLayout />} >
            <Route index element={<Main />} />

            <Route path='/movies' element={
              <ProtectedRouteElement isLoggedIn={isLoggedIn}>

                <Movies
                  apiError={apiError}
                  setApiError={setApiError}
                  createMovie={createMovie}
                  deleteMovie={deleteMovie}
                  setSavedMoviesList={setSavedMoviesList}
                  savedMoviesList={savedMoviesList}/>

              </ProtectedRouteElement>

            }></Route>

            <Route path='/saved-movies' element={
              <ProtectedRouteElement isLoggedIn={isLoggedIn}>

                <SavedMovies savedMoviesList={savedMoviesList} deleteMovie={deleteMovie} />

              </ProtectedRouteElement>



            }></Route>
          </Route>
          <Route path='/profile' element={
            <ProtectedRouteElement isLoggedIn={isLoggedIn}>

              <Profile
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                setCurrentUser={setCurrentUser}
                onUpdate={handleUpdateUser}
                onLogout={handleLogout}
                apiError={apiError}
                setApiError={setApiError}
              />

            </ProtectedRouteElement>


          }></Route>

          <Route path='/signin' element={
            <Login
              isLoggedIn={isLoggedIn}
              onLogin={handleLogin}
              apiError={apiError}
              setApiError={setApiError}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />}>

          </Route>
          <Route path='/signup' element={
            <Register
              isLoggedIn={isLoggedIn}
              onRegister={handleRegister}
              apiError={apiError}
              setApiError={setApiError}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />}>

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
