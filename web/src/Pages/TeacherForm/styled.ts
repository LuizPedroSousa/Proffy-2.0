import styled from 'styled-components';

export const TeacherFormContainer = styled.div`
    height: 100vh;
    width: 100vw;
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
        color: var(--color-text-title);
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
    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-gap: 2rem;
        .input-block{
            margin: 0;
        }
    }
`;