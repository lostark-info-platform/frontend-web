// import cookieModule from '@/module/cookie/cookie.module';
import cryptoModule from '@/module/crypto/crypto.module';

class TokenService {
	token: string | null = null;

	/**
	 * accessToken 만료 시간 : 12시간
	 * refreshToken 만료 시간 : 14일
	 */
	expiredTokenSeconds: number = 12 * 60 * 60;

	expiredRefreshTokenSeconds: number = 14 * 24 * 60 * 60;

	public setToken(token: string) {
		this.token = token;
	}

	public getToken(): string | null {
		return this.token && cryptoModule.decrypt(this.token);
	}

	public encryptToken(token: string) {
		return cryptoModule.encrypt(token);
	}
}

export default TokenService;
