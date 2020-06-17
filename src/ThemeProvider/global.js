import { createGlobalStyle } from 'styled-components'
//fonts 
import Orbitron1 from '../fonts/Orbitron-Regular.woff'
import Orbitron2 from '../fonts/Orbitron-Regular.woff2'
import LexendTera1 from '../fonts/lexendtera-regular-webfont.woff'
import LexendTera2 from '../fonts/lexendtera-regular-webfont.woff2'
import AdventPro1 from '../fonts/AdventPro-SemiBold.woff'
import AdventPro2 from '../fonts/AdventPro-SemiBold.woff2'
import BebasNeue1 from '../fonts/BebasNeue-Regular.woff'
import BebasNeue2 from '../fonts/BebasNeue-Regular.woff2'
import FrederickatheGreat1 from '../fonts/FrederickatheGreat-Regular.woff'
import FrederickatheGreat2 from '../fonts/FrederickatheGreat-Regular.woff2'
import OdibeeSans1 from '../fonts/OdibeeSans-Regular.woff'
import OdibeeSans2 from '../fonts/OdibeeSans-Regular.woff2'


export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
    box-sizing: border-box;
    text-decoration: none;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    scroll-behavior: none;
    overflow-x: hidden;
}
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-wrap: break-word;
    font-kerning: normal;
}
::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

@font-face {
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${Orbitron2}) format('woff2'), url(${Orbitron1}) format('woff');
}
@font-face {
  font-family: 'Lexend Tera';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Lexend Tera Regular'), local('LexendTera-Regular'), url(${LexendTera2}) format('woff2'), url(${LexendTera1}) format('woff');
}
@font-face {
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Advent Pro SemiBold'), local('AdventPro-SemiBold'), url(${AdventPro2}) format('woff2'), url(${AdventPro1}) format('woff');
}
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Bebas Neue Regular'), local('BebasNeue-Regular'), url(${BebasNeue1}) format('woff'), url(${BebasNeue2}) format('woff2');
}
@font-face {
  font-family: 'Fredericka the Great';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Fredericka the Great'), local('FrederickatheGreat'),url(${FrederickatheGreat1}) format('woff'), url(${FrederickatheGreat2}) format('woff2');
}
@font-face {
  font-family: 'Odibee Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Odibee Sans Regular'), local('OdibeeSans-Regular'),url(${OdibeeSans1}) format('woff'), url(${OdibeeSans2}) format('woff2');
}
`
