import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import Logo from '../Logo/Logo';
import { serverErrorMessages } from '../../constans/constans'

/**
 * Component for user registration
 * @param {function} onRegister - Function for handling the registration
 * @param {boolean} apiError - Flag for API error
 * @param {function} setApiError - Function for setting API error
 */
function Register({ onRegister, apiError, setApiError, isLoading, setIsLoading, isLoggedIn }) {
    // State for API error message
    const [apiErrorMessage, setApiErrorMessage] = useState('');
    // Form control using react-hook-form
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: 'onChange' });

    // Register email input with validation rules
    const emailRegister = register('email', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Введите корректную почту'
        }
    });

    // Register password input with validation rules
    const passwordRegister = register('password', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },

    });

    // Register name input with validation rules
    const namedRegister = register('name', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^[^\s]+[0-9A-Za-zА-Яа-я\s]*[^\s]+$/g,
            message: 'Строка должна состоять только из цифр и букв, а так же не может содержать пробелы в начале и в конце'
        },
        minLength: {
            value: 2,
            message: 'Минимальная длина 2'
        },
        maxLength: {
            value: 30,
            message: 'Максимальная длина 30'
        }
    });

    /**
     * Handle form submission
     * @param {Object} data - Form data
     */
    const handleSubmitForm = (data) => {
        onRegister({
            email: data.email,
            password: data.password,
            name: data.name
        }).finally(() => {
            setIsLoading(false);
        })
        .catch((error) => {
            setApiError(true);
            const err = parseInt(error.replace(/[^\d]/g, ''));
            if (err === 409) {
                setApiErrorMessage(serverErrorMessages.EMAIL_ALREADY_EXISTS_ERROR);
            } else if (err === 400) {
                setApiErrorMessage(serverErrorMessages.USER_REGISTER_ERROR);
            } else {
                setApiErrorMessage(serverErrorMessages.DEFAULT_ERROR);
            }
        });

    };

    // Render the registration form
    return isLoggedIn ? ( <Navigate to="/" replace />
    ) :(
        <main className="register">
            <Logo></Logo>
            <h1 className="register__title">Добро пожаловать!</h1>
            <AuthForm 
                onSubmit={handleSubmit(handleSubmitForm)} 
                className={''} 
                buttonText={isLoading ? 'Регистрация...' : 'Регистрация'} 
                isDirty={isDirty} 
                isValid={isValid}
                apiErrorMessage={apiErrorMessage}
                apiError={apiError}
                isLoading={isLoading}
            >
                <AuthInput
                    register={namedRegister}
                    labelText={'Имя'}
                    id={'user-name'}
                    inputType={'text'}
                    placeholder={'Введите ваше имя'}
                    registerName={'name'}
                    errors={errors}
                ></AuthInput>
                <AuthInput
                    register={emailRegister}
                    labelText={'E-mail'}
                    id={'user-email'}
                    inputType={'email'}
                    placeholder={'Введите почту'}
                    registerName={'email'}
                    errors={errors}
                ></AuthInput>
                <AuthInput
                    register={passwordRegister}
                    labelText={'Пароль'}
                    id={'user-password'}
                    inputType={'password'}
                    placeholder={'Придуйте пароль'}
                    className={'authInput__error_active'}
                    registerName={'password'}
                    errors={errors}
                ></AuthInput>
            </AuthForm>
            <p className="register__footer">Уже зарегистрированы?<Link className='register__link' to={'/signin'}>Войти</Link></p>
        </main>
    );
}

export default Register;