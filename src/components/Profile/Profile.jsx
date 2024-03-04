import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import ButtonUserSubmit from '../ButtonUserSubmit/ButtonUserSubmit';
import { serverErrorMessages } from './../../constans/constans.js';
import Header from '../Header/Header';


// This component represents a user profile with the ability to edit and logout.

/**
 * Represents the user profile with options to update and logout.
 * @param {function} onUpdate - Function to update user profile.
 * @param {function} onLogout - Function to logout user.
 * @param {boolean} apiError - Flag indicating if there is an API error.
 * @param {function} setApiError - Function to set API error.
 */
function Profile({ onUpdate, onLogout, apiError, setApiError, isLoading, setIsLoading }) {

    // State variables
    const [apiErrorMessage, setApiErrorMessage] = useState(''); // API error message
    const { currentUser } = useContext(CurrentUserContext); // Current user context
    const [editUser, setEditUser] = useState(''); // Flag to indicate if user is in edit mode
    const [editSuccess, setEditSuccess] = useState(false); // Flag to indicate if edit was successful

    // Form control with validation
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, reset, setValue, getValues } = useForm({ mode: 'onChange' });

    // Register validation for email input
    const emailRegister = register('email', {
        required: {
            value: true,
            message: 'Required field'
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Enter a valid email address'
        },
        validate: {
            checkEmail: (value, formValues) => {
                if (value === currentUser.email && formValues.name === currentUser.name) {
                    return false
                }
            }
        }
    })

    // Register validation for name input
    const namedRegister = register('name', {
        required: {
            value: true,
            message: 'Required field'
        },
        pattern: {
            value: /^[^\s]+[0-9A-Za-z\s]*[^\s]+$/g,
            message: 'Name must consist of Latin or Cyrillic letters'
        },
        minLength: {
            value: 2,
            message: 'Minimum characters: 2'
        },
        maxLength: {
            value: 10,
            message: 'Maximum characters: 10'
        },
        validate: {
            checkName: (value, formValues) => {
                if (value === currentUser.name && formValues.email === currentUser.email) {
                    return false
                }
            }
        }
    })

    // Handle form submission
    const handleSubmitForm = (data) => {
        onUpdate({
            name: data.name,
            email: data.email
        }).then(() => {
            setEditUser(false);
            setIsLoading(false);
            if (!apiError) {
                setEditSuccess(true);
                setTimeout(() => {
                    setEditSuccess(false)
                }, 3000)
            }
        })
        .catch((error) => {
            setApiError(true);
            const err = parseInt(error.replace(/[^\d]/g, ''))
            if (err === 409) {
                setApiErrorMessage(serverErrorMessages.emailAlredyExistError)
            }
            else if (err === 400) {
                setApiErrorMessage(serverErrorMessages.userOnEditError)
            } else setApiErrorMessage(serverErrorMessages.defaultError)
        }
        );
    }

    // Handle user logout
    const handleLogout = (e) => {
        e.preventDefault();
        onLogout();
    }

    // Reset form values and set user's current name and email
    useEffect(() => {
        reset();
        setValue("name", currentUser.name);
        setValue("email", currentUser.email);
    }, [currentUser, setValue]);



    // Render profile form and buttons
    return (
        <>
            <Header />
            <main className='profile'>
                <h1 className="profile__title">Привет, {currentUser.name}</h1>
                <form className="profile__form" onSubmit={handleSubmit(handleSubmitForm)}>
                    <fieldset className='profile__form-wrapper'>
                        <div className="profile__input-wrapper">
                            <label htmlFor="input-name" className="profile__caption">Имя</label>
                            <input
                                {...namedRegister}
                                minLength={2}
                                maxLength={30}
                                type="text"
                                className="profile__input"
                                id='input-name'
                                placeholder='Имя'
                                disabled={!editUser}

                                name='name'
                            />
                            <span className='profile__input-error'>{errors['name'] ? errors['name'].message : ''}</span>
                        </div>
                        <div className="profile__input-wrapper">
                            <label htmlFor="input-email" className="profile__caption">Почта</label>
                            <input
                                {...emailRegister}
                                type="email"
                                className="profile__input"
                                id='input-email'
                                placeholder='Почта'
                                name='email'
                                disabled={!editUser}

                            />
                            <span className='profile__input-error'>{errors['email'] ? errors['email'].message : ''}</span>
                        </div>
                    </fieldset>
                    {apiError ? 
                            (<span className='authForm__api-error'>{apiErrorMessage}</span>) : 
                              (<span className={`authForm__api-success ${editSuccess ? 'authForm__api-success_active' : ''}`}>Данные успешно обновлены</span>)
                            }
                    {editUser ?
                        <>
                            <ButtonUserSubmit
                                buttonText={!isLoading? 'Сохранить' : 'Сохранение...'}
                                isDirty={isDirty}
                                isValid={isValid}
                                isLoading={isLoading}>
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


            </main></>

    );

}

export default Profile;