import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
// :root {

//   }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    place-items: center;
    

  }
`;
