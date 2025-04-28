import { createGlobalStyle } from 'styled-components';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/sora/600.css';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'DM Sans', sans-serif;
    color: #101010;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #FEFEFE;
  }

  h1 {
    font-family: 'Sora', sans-serif;
    font-weight: 600;
    font-size: 80px;
    line-height: 1.1;
  }

  h2 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 40px;
  }

  h3 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 32px;
  }

  .p1 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
  }
`;