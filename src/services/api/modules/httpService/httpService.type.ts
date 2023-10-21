export type HttpServiceMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type HttpServiceParams = { [key: string]: any };

export type HttpGenericOptions = {
	url: string;
	params?: HttpServiceParams;
};

export type HttpErrorResponse<T = any> = {
	status: string;
	message: string;
	data: T;
};
