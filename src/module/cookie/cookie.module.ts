import { hasCookie, getCookie, setCookie, deleteCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';
import type { CookieMap, CookieKey, SSRCookieOptionsType } from './cookie.type';
import { IncomingMessage, ServerResponse } from 'http';

const cookieModule = {
	hasItem<P extends CookieKey>(key: P) {
		return hasCookie(key);
	},

	getItem<P extends CookieKey>(
		key: P,
		options?: OptionsType & { ssr?: boolean }
	) {
		return getCookie(key, options) as CookieMap[P] | null;
	},

	setItem<P extends CookieKey>(
		key: P,
		value: CookieMap[P],
		options?: OptionsType
	) {
		setCookie(key, value, options);
	},

	removeItem<P extends CookieKey>(key: P, options?: OptionsType) {
		deleteCookie(key, options);
	},

	setSSRItem:
		<P extends CookieKey>(
			key: P,
			value: CookieMap[P],
			options?: SSRCookieOptionsType
		) =>
		(
			setCookieHandler: (
				name: string,
				value: string | number | readonly string[]
			) => ServerResponse<IncomingMessage>
		) => {
			const cookieOptions = {
				'Max-Age': 60 * 60,
				Path: '/',
				HttpOnly: false,
				SameSite: 'strict',
				...options,
			};
			const getCookieOptionsString =
				convertOptionsToCookieString(cookieOptions);
			setCookieHandler(
				'set-cookie',
				`${key}=${value}; ${getCookieOptionsString}'`
			);
		},

	getSSRItem:
		<P extends CookieKey>(key: P) =>
		(cookieStr?: string) => {
			if (!cookieStr) return null;
			const cookieArray = cookieStr.split(';');
			const keyValue = cookieArray.find((item) =>
				item.trim().startsWith(key)
			);
			if (!keyValue) return null;
			const value = keyValue.split('=')[1];
			return value as CookieMap[P] | null;
		},
};

export default cookieModule;

function convertOptionsToCookieString(options: SSRCookieOptionsType) {
	const cookieString = [];

	for (const [key, value] of Object.entries(options)) {
		if (value === true) {
			cookieString.push(key);
		} else {
			if (value === false) {
				continue;
			}

			cookieString.push(`${key}=${value}`);
		}
	}

	return cookieString.join('; ');
}
