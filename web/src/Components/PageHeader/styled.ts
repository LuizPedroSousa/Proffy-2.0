import styled from 'styled-components';

export const Container = styled.div`
    height: 42vh;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    background-color: ${props => props.theme.colors.primaryDarker};
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1.6rem;
    }

    div a{
        cursor: pointer;
        transition: opacity 0.2s;
        :hover{
            opacity: 50%;
        }
    }

    div h1{
        color: ${props => props.theme.colors.textInPrimary};
        font: 500 1.6rem Archivo;
    }

    div img{
        width: 5rem;
    }

    div {
        @media(min-width: 1120px){
            max-width: 120rem;
        }
    }
`;

export const ContainerChildrens = styled.div`
    background-color: ${props => props.theme.colors.primary};
    z-index: 1000;
    height: 61rem;
    padding: 1.6rem;
`;

export const Content = styled.div`
    margin-top: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div:nth-child(1) p{
        font: 400 1.6rem Poppins;
        color: ${props => props.theme.colors.textInPrimary};
    }

    div:nth-child(1) h2{
        color: ${props => props.theme.colors.titleinPrimary};
        font: 700 3.6rem Archivo;
    }

    div:nth-child(2) p{
        color: ${props => props.theme.colors.textInPrimary};
    }


    @media(min-width: 1120px){
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
    }
`;

export const Childrens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3rem;
    @media(min-width: 1120px){
        margin-top: 0;
        flex-direction: row;
        flex-wrap: wrap;
    }
`