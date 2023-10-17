import { createGlobalStyle } from 'styled-components';
import resetCss from './reset.css';
import themeCss from './theme.css';
import normalizeCss from './normalize.css';

const GlobalStyle = createGlobalStyle`
  ${resetCss}
  ${themeCss}
  ${normalizeCss}
`;

export default GlobalStyle;
