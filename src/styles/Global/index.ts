import { createGlobalStyle } from 'styled-components';
import resetCss from './reset.css';
import themeCss from './theme.css';
import normalizeCss from './normalize.css';

const GlobalStyles = createGlobalStyle`
  ${resetCss}
  ${themeCss}
  ${normalizeCss}
`;

export default GlobalStyles;
