import darkModeAtom from '@/recoil/common/darkMode';
import { useRecoilValue } from 'recoil';

/**
 * @description theme 설정을 조회할 때 사용합니다.
 */
const useTheme = () => {
	const darkModeState = useRecoilValue(darkModeAtom);
	const theme = (() => {
		if (darkModeState.systemTheme === 'not-ready') return 'light';
		if (darkModeState.theme !== 'default') return darkModeState.theme;
		return darkModeState.systemTheme;
	})();

	return theme;
};

export default useTheme;
