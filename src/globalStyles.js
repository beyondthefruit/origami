import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
 margin: 0;
 padding: 0;
 background: darkgray;
 font-family: 'Space Grotesk', sans-serif, 'Dancing Script', cursive, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

section{
 display: flex;
 flex-wrap: wrap;
}

`;

export default GlobalStyle;
