import styled from 'styled-components';

export const TeacherItemContainer = styled.div`
    background-color: ${props => props.theme.colors.boxBase};
    overflow: hidden;
    margin: 2.6rem 0;
    border-radius: 0.8rem;
    border: 1px solid ${props => props.theme.colors.lineInWhite};
`;

export const Header = styled.header`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
        width: 8rem;
        height: 8rem;
        border-radius: 3.8rem;
        margin-right: 2rem;
        margin-left: 2rem;
    }

    strong{
        font: 700 2.4rem Archivo;
        color: ${props => props.theme.colors.textTitle};
    }

    @media(min-width: 1120px){
        margin-top: 3rem;
        img{
            margin-left: 3rem;
        }
    }
`;

export const Section = styled.section`
    margin: 2.8rem 0rem 0;

    p{
        margin: 2rem;
    }

    @media(min-width: 1120px){
        margin: 3rem 0rem;
        p{
            line-height: 3rem;
            margin-right: 5rem;
            margin-left: 3rem;
        }
    }
`;

export const Childrens = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;
    row-gap: 12px;
    margin: 0 1rem;
    @media(min-width: 1120px){
        display: flex;
        justify-content: center;
        align-content: space-between;
        gap: 2rem;
    }
`;

export const Footer = styled.footer`
    background-color: ${props => props.theme.colors.boxFooter};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2.5rem;
    box-shadow: 0 -1px  ${props => props.theme.colors.lineInWhite};

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.colors.secondary};
        width: 100%;
        max-width: 25rem;
        height: 5.2rem;
        border-radius: 0.8rem;
        text-decoration: none;
        margin: 1.6rem;
        transition: background-color 0.2s;
        :hover{
            background-color: ${props => props.theme.colors.secondaryDark};
        }
    }

    span{
        margin-right: 1rem;
        color: ${props => props.theme.colors.buttonText};
        font-size: 2.8rem;
    }

    a p {
        font-size: 600 1.6rem Archivo;
        color:  ${props => props.theme.colors.buttonText};
    }

    @media(min-width: 1120px){
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        a{
            margin: 3rem 3.8rem;
        }
    }
    
`;

export const TextContent = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-top: 1.6rem;

    p{
        color: ${props => props.theme.colors.textComplement};
        font-size: 1.4rem;
        margin-right: 1rem;
    }
    strong{
        font: 700 2rem Archivo;
        color: ${props => props.theme.colors.primary};
    }

    @media(min-width: 1120px){
        margin: 3rem 3.8rem;
    }
`;