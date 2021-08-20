import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundSecondary: #242529;
    --background: #121314;
    --text: #E5E5E5;
    --textSecun: #808080;
    --colorPrimary: #A46BFF;
    --colorSecondary: #9740DE;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%
    }
    @media(max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

  }

  button, input, textarea, body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    outline: none;
  }
  button:hover {
    opacity: 0.8;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: var(--text);
  }

  button {
    cursor: pointer;
  
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }




`