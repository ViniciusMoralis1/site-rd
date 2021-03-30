import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', Helvetica, sans-serif, Arial;
  }
  
  body {
    height: 100%;
    background: url("/img/bg.jpg") repeat;
    margin-left: 24px;
    margin-right: 24px;
    overflow: hidden;
    font-size: 14px;
    color: #868686;
  }
`;