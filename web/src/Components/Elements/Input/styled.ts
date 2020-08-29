import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    label{
        color: var(--color-text-in-primary);
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
        border: 1px solid var(--color-input-background);
        outline: 0;
        background-color: var(--color-box-footer);
        font: 400 1.6rem Poppins;
        padding: 0 1.6rem;
        color: var(--color-text-in-white-input);
    }

    :focus-within::after{
        content: "";
        width: calc(100% - 3.2rem);
        height: 2px;
        background-color: var(--color-primary-darker);
        position: absolute;
        bottom: 0;
        left: 1.6rem;

    }
`;