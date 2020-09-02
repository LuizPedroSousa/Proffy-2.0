import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        font-size: 60%
    }

    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root
    {
        height: 100vh;
        max-width: 100%;
    }

    body, textarea, p, h2, input{
        color: ${props => props.theme.colors.textBase};
        font: 500 1.6rem Poppins;
    }

    #root{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body{
        overflow-x: hidden;
        background-color: ${props => props.theme.colors.background};
    }

    .container {
        width: 90vw;
        max-width: 700px;
    }

    @media(min-width: 700px){
        :root{
            font-size: 62.5%;
        }
    }
`;