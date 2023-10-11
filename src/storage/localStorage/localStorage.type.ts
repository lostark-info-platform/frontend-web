import { ThemePaletteMode } from '@/theme/palette.theme';

/**
 * @description localStorage의 타입을 추가합니다.
 */
export type LocalStorageMap = {
	theme: ThemePaletteMode;
};

export type LocalStorageKey = keyof LocalStorageMap;
