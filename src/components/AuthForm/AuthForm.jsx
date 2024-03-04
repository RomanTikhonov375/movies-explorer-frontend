import React from 'react';
import ButtonUserSubmit from '../ButtonUserSubmit/ButtonUserSubmit';


function AuthForm({ onSubmit, children, className, buttonText, isDirty, isValid, apiError, apiErrorMessage, isLoading }) {

    return (
        <form action="#" className={"authForm" + className} onSubmit={onSubmit}>
            <fieldset className="authForm__wrapper">
                <ul className="authForm__list">
                    {children.map(item => {
                        return (
                            <li className="authInput" key={item.props.id}>{item}</li>
                        )
                    })}
                </ul>
            </fieldset>
            <div className="authForm__button-wrapper">
                {apiError ? (<span className='authForm__api-error'>{apiErrorMessage}</span>) : null}
                <ButtonUserSubmit buttonText={buttonText} isDirty={isDirty} isValid={isValid} isLoading={isLoading}></ButtonUserSubmit>
            </div>


        </form>

    );

}

export default AuthForm;