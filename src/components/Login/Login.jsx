import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login() {

    return (
        <main className="login">
            <Logo></Logo>
            <h1 className="login__title">Добро пожаловать!</h1>
            <AuthForm handleSubmit={() => { }} className={' login__authForm'} buttonText={'Войти'}>
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
                    minLength={8}
                    maxLength={30}
                ></AuthInput>
            </AuthForm>
            <p className="login__footer">Ещё не зарегистрированы?<Link className='login__link' to={'/signup'}>Регистрация</Link></p>
        </main>
    );

}

export default Login;