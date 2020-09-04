import React, { useState } from 'react';

import {
    Fieldset,
    Legend
} from './styled';

interface FormUserProps {
    title: string;
    complement?: string;
    classes?: string;
}

const FieldsetUser: React.FunctionComponent<FormUserProps> = ({ title, children, complement}) => {

    return (
        <Fieldset>
            <Legend>
                {title}
            </Legend>
            {children}
        </Fieldset>
    );
}

export default FieldsetUser;