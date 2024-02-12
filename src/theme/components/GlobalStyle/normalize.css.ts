import { css } from 'styled-components';

const normalizeCss = css`
	* {
		box-sizing: inherit;
	}

	button {
		outline: 0;
		background: transparent;
		border: 0;
		cursor: pointer;
	}
`;

export default normalizeCss;
