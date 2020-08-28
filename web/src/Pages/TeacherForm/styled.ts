import styled from 'styled-components';

export const TeacherFormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    .content-container{
        padding-bottom: 10rem;
    }

    .content{
        @media(min-width: 1120px){
            max-width: 75rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
        }
    }

    .content div:first-child p{
        margin: 1rem 0;
        @media(min-width: 1120px){
            max-width: 35rem;
        }
    }

    .content div:first-child h2{
        @media(min-width: 1120px){
            max-width:  40rem;
        }
    }

    .childrens{
        flex-direction: row-reverse;
        @media(min-width: 1120px){
            margin-top: 8rem;
        }
    }

    .childrens p{
        margin-left: 2rem;
    }

    .childrens p p{
        margin: 0;
    }

`;

export const Form = styled.section`
    position: relative;
    z-index: 1000;
    width: 100%;
    max-width: 35rem;
    margin: 12rem auto;
    margin-bottom: 5rem;
    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    background-color: var(--color-box-base);

    main{
        padding: 2rem;
        @media(min-width: 1120px){
            padding: 6rem;
        }
    }
    fieldset{
        border: 0;
    }

    fieldset + fieldset{
        margin: 4rem 0;
        @media(min-width: 1120px){
            margin: 8rem 0;
        }
    }

    legend{
        font: 600 2.4rem Archivo;
        color: var(--color-text-title);
        border-bottom: 1px solid var(--color-line-in-white);
        width: 100%;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        @media(min-width: 1120px){
            padding-bottom: 2rem;
        }
    }
    .input-block label,
    .select-block label{
        color: var(--color-text-complement);
    }

    .input-block input,
    .select-block select{
        color: var(--color-primary);
    }

    .input-block + .text-area-block{
        margin-top: 2rem;
    }

    @media(min-width: 1120px){
        max-width: 75rem;
        margin-top: 5rem;
    }
`;

export const Perfil = styled.div`
    div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 2rem 0;
    }

    div:nth-child(2){
        @media(min-width: 1120px){
            margin-bottom: 2rem;        
        }
    }
    img{
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 3.8rem;
        margin-right: 1rem;
        @media(min-width: 1120px){
            width: 8rem;
            height: 8rem;
            margin-right: 4rem;
        }
    }

    p{
        font: 700 2rem Archivo;
        color: var(--color-text-title);
    }

    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        align-items: center;
    }
`;

export const Fieldset = styled.fieldset`
    legend{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    legend p{
        color: var(--color-primary);
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
}
`;

export const Footer = styled.footer`
    background-color: var(--color-box-footer);
    padding: 2rem;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-top: 1px solid var(--color-line-in-white);
    div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    img{
        margin-right: 1rem;
    }

    p{
        color: var(--color-primary);
        font: 400 1.2rem Poppins;
    }

    p p{
        color: var(--color-text-light);
    }

    button{
        width: 100%;
        height: 5.6rem;
        background-color: var(--color-secondary);
        border: 0;
        outline: 0;
        color: var(--color-button-text);
        font: 600 1.6rem Archivo;
        border-radius: 0.8rem;
        margin: 2rem 0;
        transition: 0.4s;
        cursor: pointer;
        :hover{
            background-color: var(--color-secondary-dark);
            margin: 1rem 0;
        }
        @media(min-width: 1120px){
            margin: 0;
        }
    }

    @media(min-width: 1120px){
        padding: 6rem;
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

`;

export const GridContainer = styled.div`
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 3rem;
        margin-top: 2rem;
    }
`;

export const LastGridContainer = styled.div`
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-gap: 1.5rem;
        align-items: center;
        margin-top: 2rem;
    }
    .input-block:last-child{
        @media(min-width: 1120px){
            margin-top: 0;
        }
    }

`;