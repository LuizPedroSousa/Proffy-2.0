import React, { FormEvent } from 'react'

import {
    FormContainer,
    Forms,
} from './styled'

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
        <FormContainer>
            <Forms onSubmit={enterAcount}>
                <strong>{title}</strong>
                <p>{description}</p>
                {children}
                <button type="submit">
                    {buttonName}
                </button>
            </Forms>
        </FormContainer>
    );
}

export default Form;