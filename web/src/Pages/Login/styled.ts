import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100vw;
    @media(min-width: 1120px){
        display: flex;
        align-items: center;
    }

    section{
        @media(min-width: 1120px){
            margin: 0 10rem;
        }
    }

    label{
        @media(min-width: 1120px){
            margin-right: 7.8rem !important;
        }
    }
`;

export const OptionsLogin = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.4rem;
        height: 2.4rem;
        border: 1px solid var(--color-line-in-white);
        background-color: var(--color-box-footer);
        border-radius: 0.8rem;
        margin-right: 1rem;
        font-size: 1rem;
        cursor: pointer;
        color: var(--color-box-base);
        transition: opacity 0.2s;
        :hover{
            opacity: 50%;
        }
    }

    a,
    label{
        font: 400 1.4rem Poppins;
        color: var(--color-text-complement);
        transition: opacity 0.2s;
        :hover{
            opacity: 50%;
        }
    }

    label{
        margin-right: 6rem;
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem auto;
    margin-bottom: 4rem;
    max-width: 32.7rem;
    div{
        margin-top: 2rem;
    }

    a{
        color: var(--color-primary);
        transition: opacity 0.2s;
        :hover{
            opacity: 50%;
        }
    }

    p:last-child {
        color: var(--color-text-complement);
    }

    p span{
        font-size: 1.4rem ;
        color: var(--color-primary);
    }
    @media(min-width: 1120px){
        margin-bottom: 0;
        max-width: 35.7rem;
    }

    @media(min-width: 411px){
        max-width: 35.7rem;
    }
`;