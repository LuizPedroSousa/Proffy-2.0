import styled from 'styled-components';

import { Fieldset, Legend } from '../../Components/Elements/Fieldset/styled';

export const PerfilContainer = styled.div`

    width: 100vw;
    height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
    .content-container{
        background-size: contain 80%;
        background-repeat: no-repeat;
        background-position: 10rem 2rem;
        z-index: 1;
    }
    
`;

export const UserContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        height: 18rem;
        width: 18rem;
        border-radius: 35rem
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        height:4.8rem;
        width: 4.8rem;
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 35rem;
        color: ${props => props.theme.colors.buttonText};
        position: relative;
        transition: background 0.2s;
        cursor: pointer;
        top: -5rem;
        left: 6rem;
        :hover{
            background-color: ${props => props.theme.colors.secondaryDark};
        }
    }
    strong{
        font: 700 3.6rem Archivo;
        color: ${props => props.theme.colors.titleinPrimary};
    }

    p{
        font-size: 2.4rem;
    }

    padding-bottom: 8rem;
    @media(min-width: 1120px){
        padding-bottom: 10rem;
    }
`;

export const GridContainer1 = styled.div`
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
        .input-block{
            margin: 2rem 0;
        }
    }
`;

export const GridContainer2 = styled.div`
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 3rem;
        .input-block{
            margin: 1rem 0;
        }
    }
`;

export const GridContainer3 = styled.div`
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 3rem;
        .input-block,
        .select-block{
            margin: 1rem 0;
        }
    }
`;

export const GridContainer4 = styled.div`
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-gap: 3rem;
        .input-block,
        .select-block{
            margin: 1rem 0;
        }
    }
`;

export const LastFieldset = styled(Fieldset)``;

export const LastLegend = styled(Legend)`
    display: flex;
    justify-content: space-between;
    align-content: center;
    p{
        color: ${props => props.theme.colors.primary};
        margin-top: 0.5rem;
        font: 600 1.6rem Archivo;
        cursor: pointer;
        margin-left: 10rem;
        transition: opacity 0.2s;
        :hover{
            opacity: 50%;
        }

        @media(min-width: 1120px){
            margin-bottom: 1rem;
        }
    }`;