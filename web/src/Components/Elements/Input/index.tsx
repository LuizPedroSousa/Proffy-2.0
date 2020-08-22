import React, { InputHTMLAttributes } from 'react';

import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}


const Input: React.FunctionComponent<InputProps> = ({ name, label, children, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                id="name"
                {...rest}
            />
            {children}
        </div>
    );
}

export default Input;