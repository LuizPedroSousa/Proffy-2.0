import React, { TextareaHTMLAttributes, forwardRef } from 'react';

import {
    TextAreaContainer,
} from './styled'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    description?: string;
}

const TextArea: React.RefForwardingComponent<HTMLTextAreaElement, TextAreaProps> = ({ name, label, description, ...rest }, ref) => {
    return (
        <TextAreaContainer className="text-area-block">
            <div>
                <label htmlFor={name}>{label}</label>
                <p>{description}</p>
            </div>
            <textarea name={name} {...rest} ref={ref}>

            </textarea>
        </TextAreaContainer>
    );
}

export default forwardRef(TextArea);