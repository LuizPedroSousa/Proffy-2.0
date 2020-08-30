import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: var(--color-box-footer);
    padding: 2rem;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-top: 1px solid var(--color-line-in-white);
    div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    img{
        margin-right: 1rem;
    }

    p{
        color: var(--color-primary);
        font: 400 1.2rem Poppins;
        margin-top: 1rem;
    }

    p p{
        margin: 0;
        color: var(--color-text-light);
    }

    button{
        width: 100%;
        height: 5.6rem;
        background-color: var(--color-secondary);
        border: 0;
        outline: 0;
        color: var(--color-button-text);
        font: 600 1.6rem Archivo;
        border-radius: 0.8rem;
        margin: 2rem 0;
        transition: 0.4s;
        cursor: pointer;
        :hover{
            background-color: var(--color-secondary-dark);
            margin: 1rem 0;
        }
    }

    @media(min-width: 1120px){
        padding: 6rem;
        display: grid;
        grid-template-columns: 2fr 1fr;
        button{
            margin: 0;
        }
        p{
            margin: 0;
        }
    }
`;