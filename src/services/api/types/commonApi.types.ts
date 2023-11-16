export type CommonApiResponse<T> = {
	message: string | null;
	data: T;
};

export type CommonApiErrorResponse<T = null> = {
	message: string;
	data: T;
};
