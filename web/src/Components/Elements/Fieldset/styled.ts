import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    border: 0;

    padding: 2rem;


    & + &{
        margin: 4rem 0;
    }

    @media(min-width: 1120px){
        & + &{
            margin-top: 0;
        }
        padding: 0 6rem;
    }
`;

export const Legend = styled.legend`
        padding-top: 2rem;
        font: 600 2.4rem Archivo;
        color: ${props => props.theme.colors.textTitle};
        border-bottom: 1px solid ${props => props.theme.colors.lineInWhite};
        width: 100%;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        @media(min-width: 1120px){
            padding-bottom: 2rem;
            padding-top: 6rem;
        }

`;