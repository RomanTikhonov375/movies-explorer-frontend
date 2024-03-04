import React from 'react';

function ButtonUserSubmit({buttonText, isDirty, isValid, isLoading}) {
   
        return (
           <>
           <button type='submit' 
           className={`buttonUserSubmit ${!isDirty || !isValid || isLoading  ? 'buttonUserSubmit-incative' : 'buttonUserSubmit-active'}`} 
           disabled={!isDirty || !isValid || isLoading}>{buttonText}</button>
           </>
        );
    
}

export default ButtonUserSubmit;