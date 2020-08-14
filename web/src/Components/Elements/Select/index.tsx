import React, { SelectHTMLAttributes } from 'react';

import './style.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    padrao: string;
    options: Array<{
        label: string;
        value: string;
    }>
}

const Select: React.FunctionComponent<SelectProps> = ({ name, label, padrao, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name}>
                <option value="" disabled>{padrao}</option>
                {options.map(options => {
                    return <option value={options.value}>{options.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;