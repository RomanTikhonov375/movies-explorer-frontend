
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import NotFound from '../NotFound/NotFound';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "Роман", email: "test@test.com" });

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/movies' element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Movies />
              <Footer />
            </>

          }></Route>
          <Route path='/saved-movies' element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies />
              <Footer />
            </>

          }></Route>
          <Route path='/profile' element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Profile setCurrentUser={setCurrentUser} />
            </>


          }></Route>
          <Route path='/signin' element={<Login />}></Route>
          <Route path='/signup' element={<Register />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
