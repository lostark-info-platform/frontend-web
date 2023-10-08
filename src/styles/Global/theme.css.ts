import { themePalette, themePaletteSetsWithMode } from '@/theme/palette.theme';
import { css } from 'styled-components';

const themeCss = css`
	body {
		/* font-family: 폰트 패밀리를 설정해주세요. */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		line-height: 1.2;

		/* TODO: 기본 텍스트 색상을 설정해주세요. */
		color: ${themePalette.body};
		background: ${themePalette.background};
	}

	body {
		${themePaletteSetsWithMode.light};
	}

	@media (prefers-color-scheme: dark) {
		body {
			${themePaletteSetsWithMode.dark};
		}
	}

	body[data-theme='light'] {
		${themePaletteSetsWithMode.light};
	}

	body {
		${themePaletteSetsWithMode.dark};
	}
`;

export default themeCss;
