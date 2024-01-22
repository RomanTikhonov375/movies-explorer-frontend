import React from 'react';

function AuthInput({ id, labelText, inputType, placeholder, errorMessage, className, minLength, maxLength }) {
    return (
        <>
            <label htmlFor={id} className="authInput__caption">{labelText}</label>
            <input type={inputType} className="authInput__input" id={id} placeholder={placeholder} name={id} minLength={minLength} maxLength={maxLength} />
            <span className={`authInput__error ${className}`}>{errorMessage}</span>
        </>
    );
}

export default AuthInput;