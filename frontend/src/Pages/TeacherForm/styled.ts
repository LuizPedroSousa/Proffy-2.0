import styled from 'styled-components';

import { Legend, Fieldset } from '../../Components/Elements/Fieldset/styled';

export const TeacherFormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    .content-container{
        padding-bottom: 10rem;
    }

    .content div:first-child p{
        margin: 1rem 0;
    }

    .childrens{
        flex-direction: row-reverse;
    }

    .childrens p{
        margin-left: 2rem;
    }

    .childrens p p{
        margin: 0;
    }

    .form{
        margin: 12rem auto;
        margin-bottom: 5rem;
    }

    @media(min-width:1120px){
        .childrens{
            margin-top: 8rem;
        }

        .content{
            max-width: 75rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
        }

        .content div:first-child h2{
            max-width:  40rem;
        }

        .content div:first-child p{
            max-width: 35rem;
        }

        .form{
            margin: 5rem auto;
        }
    }

`;

export const GridContainer1 = styled.div`
    div:nth-child(1){
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
    }
    div:nth-child(2){
        margin-bottom: 2rem;
    }
    img{
        height: 8rem;
        width: 8rem;
        border-radius: 35rem;
        margin-right: 2rem;
    }
    strong{
        font: 700 2rem Archivo;
        color: ${props => props.theme.colors.textTitle};
    }

    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        div:nth-child(1){
            margin-bottom: 2rem;
            margin-top: 1rem;
        }
    }
`;

export const GridContainer2 = styled.div`
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 3rem;
    }
`;

export const GridContainer3 = styled.div`
    & + &{
        margin-top: 2rem;
    }
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-gap: 2rem;
        & + &{
            margin-top: 4rem;
        }
        .input-block{
            margin: 0;
        }
    }
`;

export const LastFieldset = styled(Fieldset)``;

export const LastLegend = styled(Legend)`
    display: flex;
    justify-content: space-between;
    align-content: center;
    p{
        color: ${props => 
            props.theme.title == 'light' ? props.theme.colors.primary
            : props.theme.colors.inputText
        };
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