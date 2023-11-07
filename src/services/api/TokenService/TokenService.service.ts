import { cookieService } from '@/services';

class TokenService {
	token: string | null = null;

	/**
	 * accessToken 만료 시간 : 12시간
	 * refreshToken 만료 시간 : 14일
	 */
	expiredTokenSeconds: number = 12 * 60 * 60;

	expiredRefreshTokenSeconds: number = 14 * 24 * 60 * 60;

	constructor() {}

	public setToken(token: string) {
		this.token = token;
	}

	public getToken(): string | null {
		return this.token;
	}

	public getRefreshToken(): string | null {
		return cookieService.getItem('refreshToken');
	}

	public setRefreshToken(refreshToken: string) {
		cookieService.setItem('refreshToken', refreshToken, {
			secure: true,
			maxAge: this.expiredRefreshTokenSeconds,
		});
	}
}

export default TokenService;
