import React from 'react';

function SearchForm() {

    return (
        <section className="searchForm">
            <form action="" className="searchForm__form">
                <fieldset className='searchForm__input-wrapper'>
                    <input type="search" className="searchForm__input" placeholder='Фильм' />
                    <button type='submit' className="searchForm__submit-button">Поиск</button>
                </fieldset>
                <fieldset className='searchForm__input-wrapper'>
                    <div className="searchForm__radio-wrapper">
                        <input type="checkbox" name="" id="searchForm-radio" className="searchForm__radio-button" />
                        <label htmlFor="searchForm-radio" className="searchForm__radio-caption">Короткометражки</label>
                    </div>
                    
                </fieldset>
            </form>
        </section>
    );

}

export default SearchForm;