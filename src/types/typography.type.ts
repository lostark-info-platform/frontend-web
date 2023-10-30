import themeTypography from '@/theme/typography.theme';

export type ThemeTypography = typeof themeTypography;
export type ThemeTypographyVariantMap<V extends keyof ThemeTypography> =
	ThemeTypography[V];

export type ThemeTypogrpahyVariantSizeMap<V extends keyof ThemeTypography> =
	keyof ThemeTypographyVariantMap<V>;
