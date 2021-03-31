import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', Helvetica, sans-serif, Arial;
  };
  
  body {
    height: 800px;
    background: url("/img/bg.jpg") repeat;
    padding-left: 72px;
    padding-right: 72px;
    font-size: 14px;
    color: #868686;
  };
`;