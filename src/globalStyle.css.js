import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&display=swap');

  body{
    margin: 0;
    background: rgb(23, 23, 23) radial-gradient(rgb(27, 27, 40), rgb(23, 23, 23)) no-repeat fixed center;
    color: rgb(241, 241, 241);
    font-family: 'Jost', sans-serif;
  }
  *{
    padding: 0;
    margin: 0;
  }
  html{
    --bg: rgb(34, 34, 34);
    --primary: rgb(0, 67, 167);
  }
`

export default GlobalStyle
