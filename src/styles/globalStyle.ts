import { createGlobalStyle } from "styled-components"
import 'typeface-open-sans';

const GlobalStyle: any = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Open Sans';
    };

    button {
        background-color: transparent;
        cursor: pointer;
    };
`

export default GlobalStyle