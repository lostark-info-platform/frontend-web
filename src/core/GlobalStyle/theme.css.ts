import { css } from 'styled-components';
import themeSementicColor, {
	sementicColorWithMode,
} from '@/theme/sementicColor.theme';

const themeCss = css`
	body {
		/* font-family: 폰트 패밀리를 설정해주세요. */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		line-height: 1.5;

		/* TODO: 기본 텍스트 색상을 설정해주세요. */
		background: ${themeSementicColor.background};
		color: ${themeSementicColor.primary};
	}

	body {
		${sementicColorWithMode.light};
	}

	@media (prefers-color-scheme: dark) {
		body {
			${sementicColorWithMode.dark};
		}
	}

	body[data-theme='light'] {
		${sementicColorWithMode.light};
	}

	body[data-theme='dark'] {
		${sementicColorWithMode.dark};
	}
`;

export default themeCss;
