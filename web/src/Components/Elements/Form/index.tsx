import React from 'react';

import { FormContainer } from './styled';

interface FormProps {
    classes?: string;
}

const Form: React.FunctionComponent<FormProps> = ({ classes, children }) => {
    return (
        <FormContainer className={classes}>
            {children}
        </FormContainer>
    );
}

export default Form;