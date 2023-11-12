import { css } from 'styled-components';
import themeSementicColor, {
	sementicColorWithMode,
} from '@/theme/sementicColor.theme';

import localFont from 'next/font/local';

const pretendardFont = localFont({
	src: [
		{
			path: '../../../../public/assets/fonts/pretendard/woff2-subset/Pretendard-SemiBold.subset.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../../public/assets/fonts/pretendard/woff2-subset/Pretendard-Regular.subset.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	display: 'swap',
	fallback: [
		'Pretendard',
		'-apple-system',
		'BlinkMacSystemFont',
		'system-ui',
		'Roboto',
		'Helvetica Neue',
		'Segoe UI',
		'Apple SD Gothic Neo',
		'Noto Sans KR',
		'Malgun Gothic',
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol',
		'sans-serif',
	],
});

const themeCss = css`
	body {
		/* 기본 폰트 패밀리 설정 */
		font-family: ${pretendardFont.style.fontFamily};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		line-height: 1.5;

		/* 기본 배경/텍스트 색상을 설정 */
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
