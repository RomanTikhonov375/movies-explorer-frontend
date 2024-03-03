import React from 'react';

function AuthInput({ id, labelText, inputType, placeholder, errorMessage, className, minLength, maxLength, register, errors, registerName }) {
    return (
        <>
            <label htmlFor={id} className="authInput__caption">{labelText}</label>
            <input type={inputType} className="authInput__input" id={id} placeholder={placeholder} name={id} minLength={minLength} maxLength={maxLength} {...register} />
            <span className={`authInput__error ${errors[registerName] ? 'authInput__error_active' : ''}`}>{errors[registerName] ? errors[registerName].message : ''}`</span>
        </>
    );
}

export default AuthInput;