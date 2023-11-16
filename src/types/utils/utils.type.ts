export type CapitalizeFirstLetter<T extends string> =
	T extends `${infer FirstLetter}${infer Rest}`
		? `${Uppercase<FirstLetter>}${Rest}`
		: T;
