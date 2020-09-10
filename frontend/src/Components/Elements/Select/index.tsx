import React, { SelectHTMLAttributes, forwardRef } from 'react';

import { SelectContainer } from './styled'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    padrao: string;
    options: Array<{
        label: string;
        value: string;
    }>
}

const Select: React.RefForwardingComponent<HTMLSelectElement, SelectProps> = ({ name, label, padrao, options, ...rest }, ref) => {
    return (
        <SelectContainer className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} ref={ref}{...rest}>
                <option value="" disabled hidden>{padrao}</option>

                {options.map(options => {
                    return <option key={options.value} value={options.value}>{options.label}</option>
                })}
            </select>
        </SelectContainer>
    );
}

export default forwardRef(Select);