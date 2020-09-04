import styled from 'styled-components';

export const TimeCardContainer = styled.div`
    background: linear-gradient(
        to right bottom, ${props => props.theme.colors.primary} 40%, ${props => props.theme.colors.primaryDarker}
    );
    opacity: 80%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.8rem;
    border: 1px solid ${props => props.theme.colors.lineInWhite};
    height: 10rem;
    width: 9.5rem;
    p{
        font-size: 1.2rem;
        color: ${props => props.theme.colors.textInPrimary};
        line-height: 1rem;
        margin: 0;
    }

    strong{
        color: ${props => props.theme.colors.buttonText};
        font-size: 1.1rem;
    }

    @media(min-width: 1120px){
        height: 13.6rem;
        width: 12.2rem;

        strong{
            line-height: 2.6rem;
            font-size: 1.6rem;
        }
    }

`;

export const Hours = styled.p`
    margin: 0.5rem 0 !important;
    @media(min-width: 1120px){
        line-height: 2rem;
    }
`;