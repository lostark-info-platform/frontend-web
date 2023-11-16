import themePalette from '@/theme/palette.theme';
import themeSementicColor from '@/theme/sementicColor.theme';

export type ThemePalette = typeof themePalette;
export type ThemeSemanticColor = typeof themeSementicColor;
export type ThemePaletteSteps = 100 | 200;

type ThemePalettePath<T extends keyof ThemePalette> =
	`palette.${T}.${ThemePaletteSteps}`;

type SemanticColorPath<T extends keyof ThemeSemanticColor> =
	`semanticColor.${T}`;

export type ThemeColorPath =
	| ThemePalettePath<keyof ThemePalette>
	| SemanticColorPath<keyof ThemeSemanticColor>;
