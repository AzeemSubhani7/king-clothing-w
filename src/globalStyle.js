import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Poppins';
    box-sizing: border-box;
    background-color: #e0e0e0;
    padding: 10px 20px;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
    }

    a {
    text-decoration: none;
    font-weight: 500;
    color: black;
    }
`