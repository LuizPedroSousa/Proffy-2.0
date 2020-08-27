import React, { TextareaHTMLAttributes } from 'react';

import './style.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    description?: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({ name, label, description, ...rest }) => {
    return (
        <div className="text-area-block">
            <div>
                <label htmlFor={name}>{label}</label>
                <p>{description}</p>
            </div>
            <textarea name={name} {...rest}>
                
            </textarea>
        </div>
    );
}

export default TextArea;