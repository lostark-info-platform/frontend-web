import { hasCookie, getCookie, setCookie, deleteCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';
import type { CookieMap, CookieKey } from './cookie.type';

class CookieService {
	public hasItem<P extends CookieKey>(key: P) {
		return hasCookie(key);
	}

	public getItem<P extends CookieKey>(
		key: P,
		options?: OptionsType & { ssr?: boolean }
	) {
		return getCookie(key, options) as CookieMap[P] | null;
	}

	public setItem<P extends CookieKey>(
		key: P,
		value: CookieMap[P],
		options?: OptionsType
	) {
		setCookie(key, value, options);
	}

	public removeItem<P extends CookieKey>(key: P, options?: OptionsType) {
		deleteCookie(key, options);
	}

	public getItemFromSSR<P extends CookieKey>(key: P, cookieStr?: string) {
		if (!cookieStr) return null;
		const cookieArray = cookieStr.split(';');
		const keyValue = cookieArray.find((item) =>
			item.trim().startsWith(key)
		);
		if (!keyValue) return null;
		const value = keyValue.split('=')[1];
		return value as CookieMap[P] | null;
	}
}

export default CookieService;
