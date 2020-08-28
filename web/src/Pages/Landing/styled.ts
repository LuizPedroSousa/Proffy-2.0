import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const PageLandingContent = styled.div`
    background-color: var(--color-primary);
    padding: 1.8rem;
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    a:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: 0.2s;
        :hover{
            padding-top: 1rem;
        }
        img{
            width: 4rem;
            height: 4rem;
            border-radius: 3.8rem;
            margin-right: 1rem;
        }
        p{
            color: var(--color-text-in-primary);
        }
    }

    a:nth-child(2){
        width: 4.8rem;
        height: 4.8rem;
        background-color: var(--color-primary-dark);
        border-radius: 0.8rem;
        color: var(--color-text-in-primary);
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        :hover{
            background-color: var(--color-primary-darker);
            color: var(--color-line-in-white);
        }
    }

    @media(min-width: 1120px){
        max-width: 110rem;
        margin: 0 auto;
    }

`

export const LogoContainer = styled.div`
    margin-top: 1rem;
    div{
        margin: 2rem 0;
        margin-top: 4rem;
    }

    img{
        width: 100%
    }

    div h2{
        font: 400 2.8rem Poppins;
        color: var(--color-text-in-primary);
    }

    @media(min-width: 1120px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 110rem;
        margin: 2rem auto;
        margin-bottom: 4rem;
    }

    div img{
        @media(min-width: 1120px){
            width: 45rem;
        }
    }

    div h2{
        @media(min-width: 1120px){
            display: block;
            max-width: 35rem
        }
    }

    img:nth-child(2){
        @media(min-width: 1120px){
            width: 50rem;
        }
    }
`;

export const Footer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
    div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    div:nth-child(1) h2,
    div:nth-child(1) strong{
        font-size: 2rem;
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.2rem 0;
    }

    div:nth-child(2) a{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 0.8rem;
        transition: 0.2s;
        margin: 2rem 1rem;
        width: 16rem;
        height: 8rem;
        :hover{
            margin-bottom: 1rem;
        }
    }

    div:nth-child(2) a p{
        color: var(--color-button-text);
    }

    div:nth-child(2) a:nth-child(1){
        background-color: var(--color-primary);
        :hover{
            background-color: var(--color-primary-dark);
        }
    }

    div:nth-child(2) a:nth-child(2){
        background-color: var(--color-secondary);
        :hover{
            background-color: var(--color-secondary-dark);
        }
    }

    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.8rem;
        margin-bottom: 1rem;
    }

    div:nth-child(3) p{
        font: 400 1.2rem Poppins;
        color: var(--color-text-complement);
    }

    div:nth-child(3) span{
        font: 400 1.2rem Poppins;
        color: var(--color-text-complement);
    }

    div:nth-child(3) span i{
        color: var(--color-primary);
        opacity: 0.5;
    }

    @media(min-width: 1120px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 13rem;
    }

    div:nth-child(1){
        @media(min-width: 1120px){
            display: block;
        }
    }
    div:nth-child(2){
        @media(min-width: 1120px){
            justify-content: space-around;
        }
    }

    div:nth-child(2) a{
        @media(min-width: 1120px){
            max-width: 45%;
            width: 30.1rem;
            height: 10.4rem;
            flex-direction: row;
        }
    }

    div:nth-child(2) p{
        @media(min-width: 1120px){
            margin: 3rem;
        }
    }

    div:nth-child(3){
        @media(min-width: 1120px){
            display: block;
            max-width: 20rem;
        }
    }

    div:nth-child(3) span{
        @media(min-width: 1120px){
            position: relative;
            right: -4.8rem;
        }
    }
`;