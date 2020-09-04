import styled from 'styled-components';

export const RestorePasswordContainer = styled.div`
    height: 100vh;
    width: 100vw;

    @media(min-width: 1120px){
        display: flex;
        align-content: center;
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

`;

export const RestorePasswordContent = styled.div`
    margin-bottom: 1rem;
    .form button{
        margin: 8rem 0;
        @media(min-width: 1120px){
            margin: 2rem 0;
        }
    }
    .form .input-form-block input{
        border-radius: 0.8rem;
    }

    .form p {
        @media(min-width: 1120px){
            max-width: 100%;
            margin-bottom: 5rem;
        }
    }

    .form strong{
        @media(min-width: 1120px){
            margin-bottom: 1rem;
        }
    } 
    
    @media(min-width: 1120px){
        margin: 0 10rem;
    }
    
`;