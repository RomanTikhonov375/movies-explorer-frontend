import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Register() {



    return (
        <main className="register">
            <Logo></Logo>
            <h1 className="register__title">Добро пожаловать!</h1>
            <AuthForm handleSubmit={() => { }} className={''} buttonText={'Зарегистироваться'}>
                <AuthInput
                    labelText={'Имя'}
                    id={'user-name'}
                    inputType={'text'}
                    placeholder={'Введите ваше имя'}
                    minLength={2}
                    maxLength={30}
                ></AuthInput>
                <AuthInput
                    labelText={'E-mail'}
                    id={'user-email'}
                    inputType={'email'}
                    placeholder={'Введите ваш Email'}
                ></AuthInput>
                <AuthInput
                    labelText={'Пароль'}
                    id={'user-password'}
                    inputType={'password'}
                    placeholder={'Придумайте пароль'}
                    errorMessage={'Что-то пошло не так...'}
                    className={'authInput__error_active'}
                    minLength={8}
                    maxLength={30}
                ></AuthInput>
            </AuthForm>
            <p className="register__footer">Уже зарегистрированы?<Link className='register__link' to={'/signin'}>Войти</Link></p>
        </main>
    );

}

export default Register;