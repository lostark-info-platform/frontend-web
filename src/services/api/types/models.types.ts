export type RequestAuthRefresh = {
	refreshToken: string;
};

export type ResponseAuthRefresh = {
	accessToken: string;
	refreshToken: string;
};

export type ResponseUsersMe = {
	id: number;
	name: string;
	email: string;
	createdAt: string;
};

export type OAuth2Providers = 'google' | 'kakao';

export type RequestOAuth2Login = {
	provider: OAuth2Providers;
	code: string;
};

export type ResponseOAuth2Login = {
	accessToken: string;
	refreshToken: string;
};

export type RequestConfigClientBaseUrl = {
	url: string;
};

export type ResponseSchedules = {
	scheduleId: number;
	title: string;
	category: string;
	state: 'TODO';
	memo: string;
	startDate: string;
	endDate: string;
	alarmDate: string;
};
