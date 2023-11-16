import type { LocalStorageMap, LocalStorageKey } from './localStorage.type';

const localStorageModule = {
	getItem<P extends LocalStorageKey>(key: P): LocalStorageMap[P] | null {
		const item = window.localStorage.getItem(key);
		return item ? (JSON.parse(item) as LocalStorageMap[P]) : null;
	},
	setItem<P extends LocalStorageKey>(key: P, value: LocalStorageMap[P]) {
		window.localStorage.setItem(
			key,
			typeof value !== 'string' ? JSON.stringify(value) : value
		);
	},
	removeItem(key: LocalStorageKey) {
		window.localStorage.removeItem(key);
	},
};

export default localStorageModule;
