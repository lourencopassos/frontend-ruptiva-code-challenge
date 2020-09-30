import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  }
  :root {
      font-size: ${px2vw(38)};

      @media (min-width: 768px) {
        font-size: ${px2vw(24)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(20)};
      }
    }

      body {
    -webkit-font-smoothing: antialiased !important;
  }
  body html #root {
    height: 100%;
  }
`;

export default GlobalStyle;
