import React from 'react';

function AuthInput({ id, labelText, inputType, placeholder, errorMessage }) {
    return (
        <>
            <label htmlFor={id} className="authInput__caption">{labelText}</label>
            <input type={inputType} className="authInput__input" id={id} placeholder={placeholder} />
            <span className="authInput__error">{errorMessage}</span>
        </>
    );
}

export default AuthInput;