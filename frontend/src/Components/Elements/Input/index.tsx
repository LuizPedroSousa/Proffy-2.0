import React, { InputHTMLAttributes, forwardRef } from 'react';

import {
    InputContainer

} from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}


const Input: React.RefForwardingComponent<HTMLInputElement,InputProps> = ({ name, label, children, ...rest }, ref) => {
    return (
        <InputContainer className="input-block">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                id="name"
                {...rest}
                ref={ref}
            />
            {children}
        </InputContainer>
    );
}

export default forwardRef(Input);