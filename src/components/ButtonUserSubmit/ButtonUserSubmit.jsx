import React from 'react';

function ButtonUserSubmit({buttonText, isDirty, isValid}) {
   
        return (
           <>
           <button type='submit' className={`buttonUserSubmit ${!isDirty || !isValid ? 'buttonUserSubmit-incative' : 'buttonUserSubmit-active'}`} disabled={!isDirty || !isValid}>{buttonText}</button>
           </>
        );
    
}

export default ButtonUserSubmit;