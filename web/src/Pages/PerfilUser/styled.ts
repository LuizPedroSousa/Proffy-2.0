import styled from 'styled-components';

export const PerfilContainer = styled.div`
    width: 100vw;
    height: 100vh;

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
        background-color: var(--color-secondary);
        border-radius: 35rem;
        color: var(--color-button-text);
        position: relative;
        top: -5rem;
        left: 6rem;
        :hover{
            background-color: var(--color-secondary-dark);
        }
    }
    strong{
        font: 700 3.6rem Archivo;
        color: var(--color-title-in-primary);
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