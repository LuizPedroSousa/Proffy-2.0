import React, { TextareaHTMLAttributes } from 'react';

import {
    TextAreaContainer,
} from './styled'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    description?: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({ name, label, description, ...rest }) => {
    return (
        <TextAreaContainer className="text-area-block">
            <div>
                <label htmlFor={name}>{label}</label>
                <p>{description}</p>
            </div>
            <textarea name={name} {...rest}>

            </textarea>
        </TextAreaContainer>
    );
}

export default TextArea;