import styled from 'styled-components';

export const TeachersContainer = styled.div`
    width: 100vw;
    height: 100vh;

    .childrens,
    .content div:nth-child(1) h2{
        @media(min-width: 1120px){
            margin: 0 3rem;
        }
    }

    .content div:nth-child(1) h2{
        @media(min-width: 1120px){
            display: block;
            max-width: 35rem;
        }
    }
    
    .content-container{
        transition: height 0.8s;
        @media(min-width:1120px){
            padding-bottom: 8rem;
            z-index: 2           
        }
    }
    
    .content{
        @media(min-width: 1120px){
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .content + .teacher-item{
        opacity: 10%;
    }

    main{
        margin: 0 auto;
        margin-top: 3rem;
        width: 90%;
        transition: top 0.4s;
        
        @media(min-width: 1120px){
            margin-top: 0rem;
            position: relative;
            z-index: 1000;
            top: -6rem;
            max-width: 73.6rem;
        }
    }


`;

export const DescriptionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.6rem;
    p{
        display: block;
        max-width: 14rem;
        margin-right: 2rem;
    }

    img{
        margin-right: 2rem;
    }
`;

export const Filter = styled.button`
    background-color: var(--color-button-feature);
    border: 0;
    border-radius: 3.8rem;
    width: 5.4rem;
    height: 5.4rem;
    color: var(--color-button-text);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    transition: background-color 0.2s;
    cursor: pointer;
    :hover{
        background-color: var(--color-button-feature-darker);
    }
`;

export const NoneFilter = styled.button`
    background-color: var(--color-exit-button-feature);
    border: 0;
    border-radius: 3.8rem;
    width: 5.4rem;
    height: 5.4rem;
    color: var(--color-button-text);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    transition: background-color 0.2s;
    cursor: pointer;
    :hover{
        background-color: var(--color-exit-button-feature-darker);
    }
`;

export const Form = styled.form`
    position: relative;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        height: 5.6rem;
        width: 5.6rem;
        border-radius: 3rem;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--color-button-text);
        font-size: 2rem;
        outline: 0;
        cursor: pointer;
        background-color: var(--color-primary-lighter);
        transition: background-color 0.2s;
        :hover{
            background-color: var(--color-primary-light);
        }
        @media(min-width: 1120px){
            margin: 0;
            margin-top: 3rem;
        }
    }

    @media(min-width: 1120px){
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        max-width: 67%;
        position: absolute;
        top: 22rem;
        left: 30rem;
    }
`;