import React, { InputHTMLAttributes } from 'react';

import {
    InputContainer

} from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}


const Input: React.FunctionComponent<InputProps> = ({ name, label, children, ...rest }) => {
    return (
        <InputContainer className="input-block">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                id="name"
                {...rest}
            />
            {children}
        </InputContainer>
    );
}

export default Input;