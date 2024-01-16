import React, { useState } from 'react';
import m2 from '../../images/m2.jpg'
import { useLocation } from 'react-router-dom';

function MoviesCard() {

    const location = useLocation();
    const [isSave, setIsSave] = useState(false);

    return (
        <>
            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>
            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>
            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>
            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>
            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>
            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>
            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>            <li className="moviesCard__item">
                <img src={m2} alt="" className='moviesCard__image' />
                <div className="moviesCard__wrapper">
                    <p className="moviesCard__caption">33 слова о дизайне</p>
                    <p className="moviesCard__duratation">1ч 17м</p>
                </div>
                {location.pathname === '/movies' ? <button type='button' className={`moviesCard__save-button ${isSave ? 'moviesCard__already-save-button' : ''}`} onClick={() => setIsSave(!isSave)}>Сохранить</button> :
                    <button type='button' className='moviesCard__delete-button' onClick={() => setIsSave(!isSave)}>Удалить из сохраненных</button>
                    }
            </li>

        </>
    );

}

export default MoviesCard;