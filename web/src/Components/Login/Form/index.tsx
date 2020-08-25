import React, { FormEvent } from 'react'

import './style.css'

interface FormProps {
    title: string;
    description?: string;
    buttonName: string;
}

const Form: React.FunctionComponent<FormProps> = ({ children, title, buttonName, description }) => {

    function enterAcount(e: FormEvent) {
        e.preventDefault();
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={enterAcount}>
                <strong>{title}</strong>
                <p>{description}</p>
                {children}
                <button type="submit">
                    {buttonName}
                </button>
            </form>
        </div>
    );
}

export default Form;