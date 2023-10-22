import { hasCookie, getCookie, setCookie, deleteCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';
import type { CookieMap, CookieKey } from './cookie.type';

const cookie = {
	hasItem<P extends CookieKey>(key: P) {
		return hasCookie(key);
	},
	getItem<P extends CookieKey>(key: P, options?: OptionsType) {
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
};

export default cookie;
