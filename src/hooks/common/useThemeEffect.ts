import {
	darkModeSystemThemeSelector,
	darkModeThemeSelector,
} from '@/recoil/common/darkMode';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

/**
 * @description 시스템 테마 읽기 및 테마 적용 코드
 */
const useThemeEffect = () => {
	const setDarkModeSystemTheme = useSetRecoilState(
		darkModeSystemThemeSelector
	);
	const theme = useRecoilValue(darkModeThemeSelector);

	useEffect(() => {
		const systemPrefersMatchMedia = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);

		const systemPrefersDark = systemPrefersMatchMedia.matches;

		systemPrefersMatchMedia.addEventListener(
			'change',
			({ matches: darkMode }) => {
				if (darkMode) {
					setDarkModeSystemTheme('dark');
				} else {
					setDarkModeSystemTheme('light');
				}
			}
		);

		setDarkModeSystemTheme(systemPrefersDark ? 'dark' : 'light');
	}, []);

	useEffect(() => {
		if (theme !== 'default') {
			document.body.dataset.theme = theme;
		}
	}, [theme]);
};

export default useThemeEffect;
