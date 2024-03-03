import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
function Register({ onRegister, apiError, setApiError }) {
    // State for API error message
    const [apiErrorMessage, setApiErrorMessage] = useState('');
    // Form control using react-hook-form
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, reset } = useForm({ mode: 'onChange' });
    // Navigation hook for page redirection
    const navigate = useNavigate();

    // Register email input with validation rules
    const emailRegister = register('email', {
        required: {
            value: true,
            message: 'Required field'
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Enter a valid email'
        }
    });

    // Register password input with validation rules
    const passwordRegister = register('password', {
        required: {
            value: true,
            message: 'Required field'
        },
        minLength: {
            value: 2,
            message: 'Minimum characters: 2'
        },
        maxLength: {
            value: 10,
            message: 'Maximum characters: 10'
        }
    });

    // Register name input with validation rules
    const namedRegister = register('name', {
        required: {
            value: true,
            message: 'Required field'
        },
        pattern: {
            value: /^[^\s]+[0-9A-Za-z\s]*[^\s]+$/g,
            message: 'Name should consist of Latin or Cyrillic letters'
        },
        minLength: {
            value: 2,
            message: 'Minimum characters: 2'
        },
        maxLength: {
            value: 10,
            message: 'Maximum characters: 10'
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
        }).then(() => {
            navigate('/movies', { replace: true });
            reset();
        })
        .catch((error) => {
            setApiError(true);
            const err = parseInt(error.replace(/[^\d]/g, ''));
            if (err === 409) {
                setApiErrorMessage(serverErrorMessages.emailAlredyExistError);
            } else if (err === 400) {
                setApiErrorMessage(serverErrorMessages.userOnRegisterError);
            } else {
                setApiErrorMessage(serverErrorMessages.defaultError);
            }
        });
    };

    // Render the registration form
    return (
        <main className="register">
            <Logo></Logo>
            <h1 className="register__title">Welcome!</h1>
            <AuthForm 
                onSubmit={handleSubmit(handleSubmitForm)} 
                className={''} 
                buttonText={'Register'} 
                isDirty={isDirty} 
                isValid={isValid}
                apiErrorMessage={apiErrorMessage}
                apiError={apiError}
            >
                <AuthInput
                    register={namedRegister}
                    labelText={'Name'}
                    id={'user-name'}
                    inputType={'text'}
                    placeholder={'Enter your name'}
                    minLength={2}
                    maxLength={30}
                    registerName={'name'}
                    errors={errors}
                ></AuthInput>
                <AuthInput
                    register={emailRegister}
                    labelText={'E-mail'}
                    id={'user-email'}
                    inputType={'email'}
                    placeholder={'Enter your Email'}
                    registerName={'email'}
                    errors={errors}
                ></AuthInput>
                <AuthInput
                    register={passwordRegister}
                    labelText={'Password'}
                    id={'user-password'}
                    inputType={'password'}
                    placeholder={'Create a password'}
                    errorMessage={'Something went wrong...'}
                    className={'authInput__error_active'}
                    minLength={8}
                    maxLength={30}
                    registerName={'password'}
                    errors={errors}
                ></AuthInput>
            </AuthForm>
            <p className="register__footer">Already registered?<Link className='register__link' to={'/signin'}>Sign in</Link></p>
        </main>
    );
}

export default Register;