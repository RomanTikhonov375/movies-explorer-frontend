import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import Logo from '../Logo/Logo';
import { serverErrorMessages } from '../../constans/constans'

/**
 * Component for user login
 * @param {Function} onLogin - Function to handle login
 * @param {boolean} apiError - Flag to indicate API error
 * @param {Function} setApiError - Function to set API error
 * @returns {JSX.Element} - Login component
 */
function Login({ onLogin, apiError, setApiError, isLoading, setIsLoading }) {
    // State for API error message
    const [apiErrorMessage, setApiErrorMessage] = useState('')

    // Hook for navigation
    const navigate = useNavigate();
    // Hook for form handling
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, reset } = useForm({ mode: 'onChange' });

    // Registration for email input
    const emailRegister = register('email', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Введите email'
        }
    })

    // Registration for password input
    const passwordRegister = register('password', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
    })

    // Function to handle form submission
    const handleSubmitForm = (data) => {
        // Call onLogin function with email and password
            
        onLogin({
            email: data.email,
            password: data.password
        }).then(() => {
            navigate('/movies', { replace: true });
            reset();
        }).catch((error) => {
            // Set API error flag
            setApiError(true);
            // Process error code and set error message
            const err = parseInt(error.replace(/[^\d]/g, ''))
            if (err === 400) {
                setApiErrorMessage(serverErrorMessages.authTokenError)
            } else if (err === 401) {
                setApiErrorMessage(serverErrorMessages.authError)
            } else if (err === 403) {
                setApiErrorMessage(serverErrorMessages.authTokenFormatError)
            } else setApiErrorMessage(serverErrorMessages.serverError)
        }).finally(() => {
            setIsLoading(false);
        });
    }

    // Render login component
    return (
        <main className="login">
            <Logo></Logo>
            <h1 className="login__title">Добро пожаловать!</h1>
            {/* Render authentication form */}
            <AuthForm 
                onSubmit={handleSubmit(handleSubmitForm)} 
                className={' login__authForm'} 
                buttonText={isLoading ? 'Вход...' : 'Войти'} 
                isDirty={isDirty} 
                isValid={isValid}
                apiError={apiError}
                apiErrorMessage={apiErrorMessage}
                isLoading={isLoading}
                >
                {/* Render email input */}
                <AuthInput
                    register={emailRegister}
                    labelText={'E-mail'}
                    id={'user-email'}
                    inputType={'email'}
                    placeholder={'Введите ваш Email'}
                    errors={errors}
                    registerName={'email'}
                ></AuthInput>
                {/* Render password input */}
                <AuthInput
                    register={passwordRegister}
                    labelText={'Пароль'}
                    id={'user-password'}
                    inputType={'password'}
                    placeholder={'Введите ваш пароль'}
                    minLength={8}
                    maxLength={10}
                    errors={errors}
                    registerName={'password'}
                ></AuthInput>
            </AuthForm>
            <p className="login__footer">Ещё не зарегистрированы?<Link className='login__link' to={'/signup'}>Регистрация</Link></p>
        </main>
    );
}

export default Login;