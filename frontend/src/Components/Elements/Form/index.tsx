import React, { HTMLAttributes } from 'react';

import { FormContainer } from './styled';

interface FormProps extends HTMLAttributes<HTMLFormElement> {
    classes?: string;
}

const Form: React.FunctionComponent<FormProps> = ({ classes, children, ...rest }) => {
    return (
        <FormContainer
            {...rest}
            className={classes}
        >
            {children}
        </FormContainer>
    );
}

export default Form;