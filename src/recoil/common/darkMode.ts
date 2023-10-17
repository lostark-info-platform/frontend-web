import { ThemeMode } from '@/theme/sementicColor.theme';
import { DefaultValue, atom, selector } from 'recoil';

export type DarkModeState = {
	theme: ThemeMode | 'default';
	systemTheme: ThemeMode | 'not-ready';
};

const initialState: DarkModeState = {
	theme: 'default',
	systemTheme: 'not-ready',
};

const darkModeAtom = atom({
	key: '@common/darkMode',
	default: initialState,
});

export default darkModeAtom;

export const darkModeThemeSelector = selector({
	key: '@common/darkMode/theme',
	get: ({ get }) => {
		return get(darkModeAtom).theme;
	},
	set: ({ set, get }, theme) => {
		if (theme instanceof DefaultValue) {
			return;
		}
		const darkMode = get(darkModeAtom);
		set(darkModeAtom, {
			...darkMode,
			theme,
		});
	},
});

export const darkModeSystemThemeSelector = selector({
	key: '@common/darkMode/systemTheme',
	get: ({ get }) => {
		return get(darkModeAtom).systemTheme;
	},
	set: ({ set, get }, systemTheme) => {
		if (systemTheme instanceof DefaultValue) {
			return;
		}

		const darkMode = get(darkModeAtom);
		set(darkModeAtom, {
			...darkMode,
			systemTheme,
		});
	},
});
