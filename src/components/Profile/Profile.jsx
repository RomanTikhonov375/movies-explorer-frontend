import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ButtonUserSubmit from '../ButtonUserSubmit/ButtonUserSubmit';
import { Link, useNavigate } from 'react-router-dom';


function Profile({ setCurrentUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [editUser, setEditUser] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        setEditUser(false);
        setCurrentUser({ ...currentUser });
    }

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/' , {replace: true})
    }

    return (
        <main className='profile'>
            <h1 className="profile__title">Привет, {currentUser.name}</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <fieldset className='profile__form-wrapper'>
                    <div className="profile__input-wrapper">
                        <label htmlFor="input-name" className="profile__caption">Имя</label>
                        <input
                            minLength={2}
                            maxLength={30}
                            type="text"
                            className="profile__input"
                            id='input-name'
                            placeholder='Имя'
                            value={currentUser.name}
                            disabled={!editUser}
                            onChange={(event) => setCurrentUser({ ...currentUser, name: event.target.value })}
                        />
                    </div>
                    <div className="profile__input-wrapper">
                        <label htmlFor="input-email" className="profile__caption">Почта</label>
                        <input
                            type="text"
                            className="profile__input"
                            id='input-email'
                            placeholder='Почта'
                            value={currentUser.email}
                            disabled={!editUser}
                            onChange={(event) => setCurrentUser({ ...currentUser, email: event.target.value })}
                        />
                    </div>
                </fieldset>
                {editUser ?
                    <>
                        <span className="profile__error-text">При обновлении профиля произошла ошибка.</span>
                        <ButtonUserSubmit
                            buttonText={'Сохранить'}>
                        </ButtonUserSubmit>
                    </>
                    :
                    <div className="profile__button-wrapper">
                        <button
                            type='button'
                            className="profile__edit-button"
                            onClick={() => setEditUser(true)}>
                            Редактировать
                        </button>
                        <button className="profile__logout-button" onClick={handleLogout}>Выйти из аккаунта</button>
                    </div>}
            </form>


        </main>
    );

}

export default Profile;