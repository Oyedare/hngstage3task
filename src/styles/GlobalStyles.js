import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --primary: #A02279;
    --text: #434343;
    --white: #fff;
    --black: #000;
    --black-1: #333333;
    --footer-bg: #1D1D1E;
    --header-bg: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
    --fontFamily: 'Red Rose', cursive;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  overflow-x: hidden;
}
body{
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
    width: 100vw;
    color: var(--text);
    font-family: var(--fontFamily);
}
a {
    text-decoration: none;
  }
ul {
    list-style: none;
  }
input{
  outline: none;
  border: 0;
}
`