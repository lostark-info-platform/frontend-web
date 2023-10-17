import theme from './constants/theme.constant';
import { buildCssVariables, cssVar } from './utils/css.util';

const sementicColor = theme.semanticColor;
type SementicColor = typeof sementicColor.light;

export type ThemeMode = 'light' | 'dark';

type SementicColorKey = keyof SementicColor;

const sementicColorKeys = Object.keys(
	sementicColor.light
) as SementicColorKey[];

export const sementicColorWithMode = {
	light: buildCssVariables(sementicColor.light),
	dark: buildCssVariables(sementicColor.dark),
};

/**
 * @description 팔레트를 css 에서 사용할 때 해당 함수를 사용해주세요.
 */
const themeSementicColor: Record<SementicColorKey, string> =
	sementicColorKeys.reduce((acc, current) => {
		acc[current] = cssVar(current);
		return acc;
	}, {} as SementicColor);

export default themeSementicColor;
