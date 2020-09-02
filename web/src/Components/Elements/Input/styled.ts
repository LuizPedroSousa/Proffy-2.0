import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    label{
        color: ${props => props.theme.colors.textInPrimary};
        font: 400 1.4rem Poppins;
    }

    .select-block + &{
        margin-top: 1.4rem;
        @media(min-width: 1120px){
            margin-top: 0;
        }
    }

    & + &{
        margin-top: 1.4rem;
    }
    
    input{
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        height: 5.6rem;
        width: 100%;
        border: 1px solid ${props => props.theme.colors.inputBackground};
        outline: 0;
        background-color: ${props => props.theme.colors.boxFooter};
        font: 400 1.6rem Poppins;
        padding: 0 1.6rem;
        color: ${props => props.theme.colors.textBase};
    }

    :focus-within::after{
        content: "";
        width: calc(100% - 3.2rem);
        height: 2px;
        background-color: ${props => props.theme.colors.primaryDarker};
        position: absolute;
        bottom: 0;
        left: 1.6rem;

    }
`;