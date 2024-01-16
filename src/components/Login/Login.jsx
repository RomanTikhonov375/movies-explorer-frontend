import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <section className="login">
            <div className="logo"></div>
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
                ></AuthInput>
            </AuthForm>
            <p className="login__footer">Ещё не зарегистрированы?<Link className='login__link' to={'/signup'}>Регистрация</Link></p>
        </section>
    );

}

export default Login;