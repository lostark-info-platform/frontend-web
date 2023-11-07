import { ThemeMode } from '@/theme/sementicColor.theme';

/**
 * @description cookie의 타입을 추가합니다.
 */
export type CookieMap = {
	theme: ThemeMode;
	refreshToken: string;
};

export type CookieKey = keyof CookieMap;
