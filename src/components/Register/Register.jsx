import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import { Link } from 'react-router-dom';

function Register() {



    return (
        <section className="register">
            <div className="logo"></div>
            <h1 className="register__title">Добро пожаловать!</h1>
            <AuthForm handleSubmit={() => { }} className={''} buttonText={'Зарегистироваться'}>
                <AuthInput
                    labelText={'Имя'}
                    id={'user-name'}
                    inputType={'text'}
                    placeholder={'Введите ваше имя'}
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
                ></AuthInput>
            </AuthForm>
            <p className="register__footer">Уже зарегистрированы?<Link className='register__link' to={'/signin'}>Войти</Link></p>
        </section>
    );

}

export default Register;