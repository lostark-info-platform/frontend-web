import themePalette from '@/theme/palette.theme';
import themeSementicColor from '@/theme/sementicColor.theme';
import type {
	ThemeColorPath,
	ThemePalette,
	ThemeSemanticColor,
} from '@/types/theme/color.type';

/**
 * @description 컬러를 css 에서 사용할 때 해당 함수를 사용해주세요.
 * @param colorPath 'palette.primary.100' | 'semanticColor.primary'
 * @returns '#FFFFFF' | '#000000' | "var(--primary)"
 */
export const getColorValueFromPath = (colorPath: ThemeColorPath) => {
	const [colorType, ...colorKeys] = colorPath.split('.');

	if (colorType === 'palette') {
		return colorKeys.reduce((acc, current) => {
			const colorKey = acc as unknown as keyof ThemePalette;
			const colorValue =
				current as unknown as keyof ThemePalette[typeof colorKey];
			return themePalette[colorKey][colorValue];
		});
	}

	return themeSementicColor[colorKeys[0] as keyof ThemeSemanticColor];
};

/**
 * @description 컬러를 css 에서 사용할 때 해당 함수를 사용해주세요.
 * @param colorPath 'palette.primary.100' | 'semanticColor.primary'
 * @returns { color: '#FFFFFF' | '#000000' | "var(--primary)" }
 */
export const themeColorToObject = (colorPath?: ThemeColorPath) => {
	return (
		colorPath && {
			color: getColorValueFromPath(colorPath),
		}
	);
};
