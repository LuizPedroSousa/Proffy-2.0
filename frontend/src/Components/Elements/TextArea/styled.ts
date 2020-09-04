import styled from 'styled-components';

export const TextAreaContainer = styled.div`
    width: 100%;
    div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 1rem 0;
    }

    div label{
        font: 400 1.4rem Poppins;
        color: ${props => props.theme.colors.textComplement};
        margin-right: 1rem;
    }

    div p{
        font: 400 1.2rem Poppins;
        color: ${props => props.theme.colors.inputText};
        margin-top: 0.2rem;
    }

    textarea{
        background-color: ${props => props.theme.colors.boxFooter};
        border-radius: 0.8rem;
        border: 1px solid ${props => props.theme.colors.lineInWhite};
        outline: 0;
        resize: vertical;
        width: 100%;
        color: ${props => props.theme.colors.primary};
        height: 16rem;
        padding: 1rem;
    }
    :focus-within::before{
        content: "";
        width: calc(100% - 10rem);
        height: 0.2rem;
        background-color: ${props => props.theme.colors.primary};
        margin: 0 auto;
        position: absolute;
        bottom: 92rem;
        left: 5rem;
    }

    @media(min-width: 1120px){
        textarea{
            height: 16.8rem;
        }

        :focus-within::before{
            bottom: 82.2rem;
            left: 10rem;
            width: calc(100% - 20rem);
        }
    }
`;