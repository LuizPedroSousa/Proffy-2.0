import React from 'react'

import './style.css'

interface FormProps {
    title: string;
    buttonName: string;
}

const Form: React.FunctionComponent<FormProps> = ({ children, title, buttonName }) => {
    return (
        <div className="form-container">
            <form className="form">
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