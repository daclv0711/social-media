import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --width-body-main: 590px; 
  --width-block-main: 500px; 
  --white: #fff;
  --black: #000;
  --bodyGrey: #F0F2F5;
  --gray: #efefef;
  --lightGray: #E4E6EB;
  --gray-70: rgba(229, 231, 235, 1);
  --gray-80: rgba(209, 213, 219, 1);
  --blue: #1877F2;
  --blue-light: #F0F2F5;
  --secondary-text: #65676B;
  --green-online: #31A24C;
  --shadow-1: rgba(0, 0, 0, 0.1);
  --shadow-2: rgba(0, 0, 0, 0.3);
  --header-main: 2.4rem;
  --font-icons: 1.5rem;
  --border-radius-item: 0.5rem;
  --border-radius-main: 8px;
  --bottom-icons: -6px;
  --height-header: 56px;
  --mg-bottom-main: 1rem;
  --hover-device: ':hover';
}
* {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
  }
  
  body {  
    margin: 0;
    padding: 0;
    background-color: var(--bodyGrey);
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
  
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
  
    p {
      font-size: 1rem;
      color: var(--white);
    }
    @media screen and (max-width: 1440px) {
        --font-icons: 1.2rem;
        --bottom-icons: -9px;
    }
    @media screen and (max-width: 1024px) {
        --font-icons: 1rem;
        --bottom-icons: -12px;
        --header-main: 1.6rem;
        --width-body-main: 500px;
        --width-block-main: 400px;
    }
    @media screen and (max-width: 768px) {
      --font-icons: 1rem;
      --bottom-icons: -12px;
      --width-body-main: 400px;
      --width-block-main: 350px;
      --header-main: 1.2rem;
  }
    @media screen and (max-width: 576px) {
        --font-icons: 1rem;
        --bottom-icons: -12px;
        --width-body-main: 100%;
        --width-block-main: 100%;
        --header-main: 1.2rem;
        --border-radius-main: 0;

    }
  }
  `;
