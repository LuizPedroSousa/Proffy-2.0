import React, { HtmlHTMLAttributes, useState } from 'react';

import './style.css';

interface InputFormProps extends HtmlHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: string;
}

const InputForm: React.FunctionComponent<InputFormProps> = (props, ...rest) => {
    const [inputChangeLabel, setInputChangeLabel] = useState('');
    return (
        <div className="input-form-block">
            <label 
                htmlFor={props.name}
                style={
                    inputChangeLabel != ""
                        ? 
                    {
                        top: "1.2rem",
                        fontSize: "1.2rem"
                        
                    } 
                        : 
                    {
                        top: "2rem",
                    }
                }
            >{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                {...rest}
                onChange={e => setInputChangeLabel(e.target.value)}
            />
            {props.children}
        </div>
    );
}
export default InputForm;