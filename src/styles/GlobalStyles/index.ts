import { createGlobalStyle } from 'styled-components';
import resetCss from './reset.css';

const GlobalStyles = createGlobalStyle`
  ${resetCss}
`;

export default GlobalStyles;
