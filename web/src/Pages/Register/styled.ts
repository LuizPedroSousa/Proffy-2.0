import styled from 'styled-components';

export const RegisterContainer = styled.div`
    height: 100vh;
    width: 100vw;
    .form-container{
        margin-bottom: 8rem;
        margin-top: 0;
        @media(min-width: 1120px){
            margin: 0 10rem;
            padding-top: 0;
        }
    }

    .form strong{
        margin-bottom: 0;
    }

    .form button{
        margin-top: 5rem;
    }

    @media(min-width: 1120px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Header = styled.header`
    padding: 2rem;
    a{
        transition: opacity 0.2s;
        :hover{
            opacity: 50%;
        }
    }
    @media(min-width: 1120px){
        margin: 0 11rem;
        margin: 0 10rem;
        padding-top: 0;
    }
`;