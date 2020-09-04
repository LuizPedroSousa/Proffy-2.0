import React, { InputHTMLAttributes, useState } from 'react';

import { InputFormContainer } from './styled';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: string;
    styles?: object;
}

const InputForm: React.FunctionComponent<InputFormProps> = ({ label, name, type, children, styles, ...rest }) => {
    return (
        <InputFormContainer className="input-form-block">
            <label
                htmlFor={name}
                style={styles}
            >{label}</label>
            <input
                type={type}
                name={name}
                {...rest}
            />
            {children}
        </InputFormContainer>
    );
}
export default InputForm;