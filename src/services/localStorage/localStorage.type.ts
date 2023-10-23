import { ThemeMode } from '@/theme/sementicColor.theme';

/**
 * @description localStorage의 타입을 추가합니다.
 */
export type LocalStorageMap = {
	theme: ThemeMode;
};

export type LocalStorageKey = keyof LocalStorageMap;
