import styled from 'styled-components';

export const FormContainer = styled.form`
    position: relative;
    z-index: 1000;
    width: 100%;
    max-width: 35rem;
    margin: 18rem auto;
    margin-bottom: 5rem;
    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    background-color: var(--color-box-base);

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

    .lastchild{
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
    }

    @media(min-width: 1120px){
        max-width: 75rem;
        margin-top: 20rem;
    }
`;