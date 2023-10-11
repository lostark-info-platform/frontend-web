import { buildCssVariables, cssVar } from './utils/css.util';

/**
 * @description 팔레트를 추가하거나 수정하려면 아래를 설정해주세요.
 */

type ThemePalette = {
	background: string;
	fourth: string;
	third: string;
	secondary: string;
	body: string;
};

const themePaletteSets: Record<ThemePaletteMode, ThemePalette> = {
	light: {
		background: '#FFFFFF',
		fourth: '#FAFAFA',
		third: '#E8E8E8',
		secondary: '#919191',
		body: '#414141',
	},
	dark: {
		background: '#171717',
		fourth: 'rgba(43, 45, 49, 0.8)',
		third: 'rgba(145, 145, 145, 0.8)',
		secondary: '#E8E8E8',
		body: '#FAFAFA',
	},
};

export type ThemePaletteMode = 'light' | 'dark';

type ThemePaletteKey = keyof ThemePalette;

const themePaletteSetsKeys = Object.keys(
	themePaletteSets.light
) as ThemePaletteKey[];

export const themePaletteSetsWithMode = {
	light: buildCssVariables(themePaletteSets.light),
	dark: buildCssVariables(themePaletteSets.dark),
};

/**
 * @description 팔레트를 css 에서 사용할 때 해당 함수를 사용해주세요.
 */
export const themePalette: Record<ThemePaletteKey, string> =
	themePaletteSetsKeys.reduce((acc, current) => {
		acc[current] = cssVar(current);
		return acc;
	}, {} as ThemePalette);
