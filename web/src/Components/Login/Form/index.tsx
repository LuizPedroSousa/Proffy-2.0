import React, { FormEvent } from 'react'

import './style.css'

interface FormProps {
    title: string;
    buttonName: string;
}

const Form: React.FunctionComponent<FormProps> = ({ children, title, buttonName }) => {
    
    function enterAcount(e: FormEvent){
        e.preventDefault();
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={enterAcount}>
                <strong>{title}</strong>
                {children}
                <button type="submit">
                    {buttonName}
                </button>
            </form>
        </div>
    );
}

export default Form;