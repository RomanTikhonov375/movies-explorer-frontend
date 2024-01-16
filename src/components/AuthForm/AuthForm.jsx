import React from 'react';
import ButtonUserSubmit from '../ButtonUserSubmit/ButtonUserSubmit';


function AuthForm({handleSubmit, children, className, buttonText}) {

        return (
            <form action="" className={"authForm" + className} onSubmit={handleSubmit}>
                <fieldset className="authForm__wrapper">
                    <ul className="authForm_list">
                        {children.map(item => {
                            return (
                                <li className="authForm__list-item" key={item.props.id}>{item}</li>
                            )
                        })}
                    </ul>
                </fieldset>
                <ButtonUserSubmit buttonText={buttonText}></ButtonUserSubmit>
          
            </form>
 
        );
    
}

export default AuthForm;