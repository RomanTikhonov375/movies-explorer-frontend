import React from 'react';
import { useForm } from 'react-hook-form'

/**
 * SearchForm component for movie search form
 * @param {function} searchFormSubmitHandler - Handler for form submit
 * @param {function} isShortCheckboxHandler - Handler for short movie checkbox change
 * @param {object} moviesFilter - Object containing request and isShort properties for movies filter
 */
function SearchForm({ searchFormSubmitHandler, isShortCheckboxHandler, moviesFilter }) {
    // Destructuring useForm from react-hook-form library
    const { register, handleSubmit } = useForm({
        defaultValues: { search: moviesFilter.request, isShort: moviesFilter.isShort },
        value: { search: moviesFilter.request, isShort: moviesFilter.isShort }, mode: 'onSubmit'
    });

    // Registering search input with required validation
    const searchRegister = register('search', {
        required: 'Нужно ввести ключевое слово'
    })

    // Rendering search form
    return (
        <section className="searchForm">
            <form action="#" className="searchForm__form" onSubmit={handleSubmit(searchFormSubmitHandler)}>
                <h2 className="searchForm__header">Форма поиска фильмов</h2>
                <fieldset className='searchForm__input-wrapper'>
                    <input type="search" name='search' className="searchForm__input" placeholder='Фильм' required {...searchRegister} />
                    <button type='submit' className="searchForm__submit-button">Поиск</button>
                </fieldset>
                <fieldset className='searchForm__input-wrapper'>
                    <div className="searchForm__radio-wrapper">
                        <input
                            type="checkbox"
                            name="isShort"
                            id="searchForm-radio"
                            className="searchForm__radio-button"
                            {...register('isShort', {onChange: isShortCheckboxHandler})}
                             />
                        <label htmlFor="searchForm-radio" className="searchForm__radio-caption" >Короткометражки</label>
                    </div>

                </fieldset>
            </form>
        </section>
    );

}

export default SearchForm;