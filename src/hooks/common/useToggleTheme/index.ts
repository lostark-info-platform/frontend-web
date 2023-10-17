import localStorage from '@/storage/localStorage';
import useTheme from '../useTheme';
import { ThemeMode } from '@/theme/sementicColor.theme';
import cookie from '@/storage/cookie';
import { useSetRecoilState } from 'recoil';
import { darkModeThemeSelector } from '@/recoil/common/darkMode';

/**
 * @description 테마 토글 기능 및 로컬스토리지, 쿠키 저장 hook
 */
const useToggleTheme = () => {
	const theme = useTheme();
	const setDarkModeTheme = useSetRecoilState(darkModeThemeSelector);

	const save = (value: ThemeMode) => {
		localStorage.setItem('theme', value); // CSR
		cookie.setItem('theme', value); // SSR
	};

	const toggle = () => {
		if (!theme) return;

		const toggleValue = theme === 'dark' ? 'light' : 'dark';

		setDarkModeTheme(toggleValue);
		save(toggleValue);
	};

	return [theme, toggle] as const;
};

export default useToggleTheme;
