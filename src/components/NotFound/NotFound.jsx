import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {

    const location = useNavigate();

    return (
        <main className="notFound">
            <h1 className="notFound__title">404</h1>
            <p className="notFound__caption">Страница не найдена</p>
            <button className="notFound__backward-button" onClick={() => { location(-1); }}>
                Назад
            </button>
        </main>
    );

}

export default NotFound;