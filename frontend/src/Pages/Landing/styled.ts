import styled, { keyframes } from 'styled-components';
import { shade, lighten } from 'polished';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const PageLandingContent = styled.div`
    background-color: ${props => props.theme.colors.primary};
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
            color: ${props => props.theme.colors.textInPrimary};
        }
    }

    button{
        width: 4.8rem;
        height: 4.8rem;
        background-color: ${props => props.theme.colors.primaryDark};
        border-radius: 0.8rem;
        border: 0;
        outline: 0;
        color: ${props => props.theme.colors.textInPrimary};
        transition: 0.2s;
        font-size: 2rem;
        padding-top: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        :hover{
            background-color: ${props => props.theme.colors.primaryDarker};
            color: ${props => props.theme.colors.lineInWhite};
            animation: ${rotate} 2s linear infinite;
        }
    }

    @media(min-width: 1120px){
        max-width: 110rem;
        margin: 0 auto;
    }

`


export const Config = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4rem 2rem;
    margin: 0 auto;
    transition: 0.8s;
    height: 0;
    width: calc(100% - 5rem);
    background-color: ${props => props.theme.colors.primaryDarker};
    border-radius: 0.8rem;
    top: 2rem;
    right: 0rem;
    position: absolute;
    z-index: 1000;
    @media(min-width: 1120px){
        max-width: 35rem;
        height: calc(100% - 5rem)
    }
`;

export const ButtonTheme = styled.button`
    width: 100%;
    max-width: 20rem;
    height: 5.6rem;
    border: 0;
    outline: 0;
    cursor: pointer;
    background-color: ${props => props.theme.colors.buttonThemes};
    color: ${props => props.theme.colors.buttonText};
    font: 700 1.8rem Archivo;
    border-radius: 0.8rem;
    position: relative;
    transition:  2s;
    & + div{
        margin-top: 1rem;
    }
    :hover{
        background-color:${props => shade(0.5, props.theme.colors.buttonThemes)};
        color: ${props => shade(0.5, props.theme.colors.buttonText)};
    }
`;

export const ButtonExit = styled(ButtonTheme)`
    margin-top: 2rem;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondary};
    :hover{
        background-color: ${props => shade(0.5, props.theme.colors.secondary)};
    }
`;

export const Themes = styled.div`
    background-color: ${props => shade(0.2, props.theme.colors.primaryDarker)};
    width: 100%;
    max-width: 50rem;
    border-radius: 0.8rem;
    display: flex;
    padding: 2rem;
    align-items: center;
    flex-direction: column;
    transition: ease-in 0.5s;
    p{
        margin-bottom: 1rem;
        font: 700 2rem Archivo;
        color: ${props => props.theme.colors.textInPrimary}
    }

    p + div {
        margin-bottom: 2rem;
    }
`;

export const ArrowButton = styled.button`
    height: 5.8rem;
    width: 5.8rem;
    font-size: 4rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border-radius: 0.8rem;
    transition: 0.5s;
    border: 0;
    outline: 0;
    margin-bottom: 2rem;
    background-color: ${props => shade(0.2, props.theme.colors.buttonThemes)};
    color: ${props => props.theme.colors.buttonText};
    :hover{
        background-color: ${props => shade(0.5, props.theme.colors.buttonThemes)};
    }
`;

export const LogoContainer = styled.div`
    position: relative;
    z-index: 1;
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
        color: ${props => props.theme.colors.textInPrimary};
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
        color: ${props => props.theme.colors.buttonText};
    }

    div:nth-child(2) a:nth-child(1){
        background-color: ${props => props.theme.colors.primary};
        :hover{
            background-color: ${props => props.theme.colors.primaryDark};
        }
    }

    div:nth-child(2) a:nth-child(2){
        background-color: ${props => props.theme.colors.secondary};
        :hover{
            background-color: ${props => props.theme.colors.secondaryDark};
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
        color: ${props => props.theme.colors.textComplement};
    }

    div:nth-child(3) span{
        font: 400 1.2rem Poppins;
        color: ${props => props.theme.colors.textComplement};
    }

    div:nth-child(3) span i{
        color: ${props => props.theme.colors.primary};
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