import styled from 'styled-components';

export const FormContainer = styled.form`
    position: relative;
    z-index: 1000;
    width: 100%;
    max-width: 35rem;
    margin: 18rem auto;
    margin-bottom: 5rem;
    border-radius: 0.8rem;
    border: 1px solid ${props => props.theme.colors.lineInWhite};
    background-color: ${props => props.theme.colors.boxBase};

    .input-block label,
    .select-block label{
        color: ${props => props.theme.colors.textComplement};
    }

    .input-block input,
    .select-block select{
        color: ${props => props.theme.colors.primary};
    }

    .input-block + .text-area-block{
        margin-top: 2rem;
    }

    @media(min-width: 1120px){
        max-width: 75rem;
        margin-top: 20rem;
    }
`;