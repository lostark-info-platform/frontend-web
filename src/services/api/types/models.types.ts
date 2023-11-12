export type RequestUsersRegister = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export type ResponseUsersRegister = {
	token: string;
	refreshToken: string;
};

export type RequestUsersLogin = {
	email: string;
	password: string;
};

export type ResponseUsersLogin = {
	token: string;
	refreshToken: string;
};

export type RequestUsersRefresh = {
	refreshToken: string;
};

export type ResponseUsersRefresh = {
	token: string;
	refreshToken: string;
};

export type ResponseUsersMe = {
	id: number;
	name: string;
	email: string;
	createdAt: string;
};

export type RequestUsersLogout = {
	refreshToken: string;
};
