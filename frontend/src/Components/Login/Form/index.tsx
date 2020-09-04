import React, { FormHTMLAttributes } from 'react'

import {
    FormContainer,
    Forms,
} from './styled'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    title: string;
    description?: string;
    buttonName: string;
}

const Form: React.FunctionComponent<FormProps> = ({ children, title, buttonName, description, ...rest }) => {
    return (
        <FormContainer className="form-container">
            <Forms className="form" {...rest}>
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