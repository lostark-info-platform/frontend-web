import { ThemePaletteMode } from '@/theme/palette.theme';

/**
 * @description cookie의 타입을 추가합니다.
 */
export type CookieMap = {
	theme: ThemePaletteMode;
};

export type CookieKey = keyof CookieMap;
