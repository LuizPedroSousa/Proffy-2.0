import styled from 'styled-components';

export const InputFormContainer = styled.div`
    position: relative;
    line-height: 0;

    label{
        font: 400 1.6rem Poppins;
        color: ${props => props.theme.colors.inputText};
        position: absolute;
        left: 2rem;
        top: 2rem;
    }

    :focus-within label{
        font-size: 1.2rem;
    }

    input{
        background-color: ${props => props.theme.colors.boxFooter};
        border: 1px solid ${props => props.theme.colors.lineInWhite};
        width: 100%;
        color: ${props => props.theme.colors.textBase};
        height: 7.2rem;
        padding: 0rem 2rem;
        padding-top: 1.2rem;
        outline: 0;
        font-weight: 400;
    }

    strong + & input{
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
    }

    p + & input{
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
    }

    input[type="password"],
    input[type="text"]:nth-child(3){
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
    }

    span{
        position: absolute;
        right: 2.8rem;
        top: 2.4rem;
        font-size: 2rem;
        cursor: pointer;
        transition: opacity 0.2s;
        :hover{
            opacity: 50%;
        }
    }

    :focus-within::before{
        content: "";
        width: 2px;
        position: absolute;
        height: calc(100% - 2.4rem);
        top: 1rem;
        border-radius: 8rem;
        background-color: ${props => props.theme.colors.primary};
    }

    @media(min-width: 1120px){
        input{ 
            width: 35.2rem;
        }
    }
`;