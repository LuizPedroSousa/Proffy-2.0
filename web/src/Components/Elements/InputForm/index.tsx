import React, { HtmlHTMLAttributes } from 'react';

import './style.css';

interface InputFormProps extends HtmlHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: string;
}

const InputForm: React.FunctionComponent<InputFormProps> = (props, ...rest) => {
    return (
        <div className="input-form-block">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                {...rest}
                {...props.children}
            />
        </div>
    );
}

export default InputForm;