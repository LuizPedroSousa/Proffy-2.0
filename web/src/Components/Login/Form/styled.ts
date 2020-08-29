import styled from 'styled-components';

export const FormContainer = styled.div`
    padding: 2rem;
    line-height: 6rem;
    margin-top: 4rem;
    
    @media(min-width: 411px){
        padding: 3rem;
    }
`;

export const Forms= styled.form`
    strong{
        font: 600 3.6rem Poppins ;
        color: var(--color-text-title);
        display: block;
        margin-bottom: 2.8rem;
        max-width: 30rem;
    }

    p{
        display: block;
        max-width: 25rem;
        margin-bottom: 2.8rem;
    }

    button{
        width: 100%;
        height: 5.6rem;
        margin-top: 2rem;
        border: none;
        border-radius: 0.8rem;
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        font: 600 1.6rem Archivo;
        transition: background-color 0.2s;
        outline: 0;
        cursor: pointer;
        :hover{
            background-color: var(--color-secondary-dark);
        }
    }

    @media(min-width: 1120px){
        button{
            width: 35.2rem;
        }
    }
`;