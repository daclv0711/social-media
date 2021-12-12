import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --width-body-main: 590px; 
  --width-block-main: 500px; 
  --width-block-image: 500px;
  --white: #fff;
  --black: #000;
  --grey-body: #F0F2F5;
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
  --background-color-menu: #fffcfc;
  --font-icons: 1.4rem;
  --font-small: 0.95rem;
  --border-radius-item: 0.5rem;
  --border-radius-main: 8px;
  --bottom-icons: -6px;
  --height-header: 56px;
  --mg-bottom-main: 1rem;
}
* {
    font-family: 'Abel', sans-serif;  
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 24px;
        background: #878889;
    }
  }
  
  body {  
    padding: 0;
    background-color: var(--grey-body);
    
    @media screen and (max-width: 1440px) {
        --bottom-icons: -7px;
        --header-main: 2rem;
    }
    @media screen and (max-width: 1024px) {
        --font-icons: 1rem;
        --bottom-icons: -12px;
        --header-main: 1.6rem;
        --width-body-main: 500px;
        --width-block-main: 400px;
        --width-block-image: 400px;
        --header-main: 1.6rem;
    }
    @media screen and (max-width: 768px) {
      --font-icons: 1rem;
      --bottom-icons: -12px;
      --width-body-main: 400px;
      --width-block-main: 350px;
      --width-block-image: 350px;
      --header-main: 1.2rem;
  }
    @media screen and (max-width: 576px) {
        --font-icons: 1rem;
        --bottom-icons: -12px;
        --width-body-main: 100%;
        --width-block-main: 100%;
        --width-block-image: calc( 100% + 2rem );
        --header-main: 1.2rem;
        --border-radius-main: 0;
    }
  }
  `;
