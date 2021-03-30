import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

  * {
    height: 100%;
    margin: 0 12px 0 12px;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', Helvetica, sans-serif, Arial;
  }
  
  body {
    background: url("/img/bg.jpg") repeat;
    font-size: 14px;
    color: #868686;
  }
`;