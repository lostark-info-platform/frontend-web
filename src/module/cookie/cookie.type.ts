import { ThemeMode } from '@/theme/sementicColor.theme';

/**
 * @description cookie의 타입을 추가합니다.
 */
export type CookieMap = {
	theme: ThemeMode;
	refreshToken: string;
	accessToken: string;
};

export type CookieKey = keyof CookieMap;

export type SSRCookieOptionsType = {
	'Max-Age': number;
	Path: string;
	HttpOnly?: boolean;
	SameSite?: string;
};
