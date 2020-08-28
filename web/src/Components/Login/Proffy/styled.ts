import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
    background-color: var(--color-primary);
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: 2em 2rem;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    div img{
        max-width: 28rem;
    }

    div h2{
        color: var(--color-text-in-primary);
        display: block;
        font: 400 2.8rem Poppins;
        max-width: 28rem;
    }

    @media(min-width: 1120px){
        height: 100%;
        width: 100%;
        background-size: 65%;
        background-position: 7em 4rem;
    }
`;