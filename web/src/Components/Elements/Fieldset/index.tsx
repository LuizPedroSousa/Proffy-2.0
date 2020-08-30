import React from 'react';

import {
    Fieldset,
    Legend
} from './styled';

interface FormUserProps {
    title: string;
    complement?: string;
    classes?: string;
}

const FieldsetUser: React.FunctionComponent<FormUserProps> = ({ title, children, complement, classes }) => {
    return (
        <Fieldset className={`${classes}`}>
            <Legend>
                {title}
                <p>
                    {complement}
                </p>
            </Legend>
            {children}
        </Fieldset>
    );
}

export default FieldsetUser;