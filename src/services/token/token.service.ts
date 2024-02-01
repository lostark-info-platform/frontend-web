// import cookieModule from '@/module/cookie/cookie.module';
import cryptoModule from '@/module/crypto/crypto.module';

class TokenService {
	encryptAccessToken: string | null = null;

	/**
	 * accessToken 만료 시간 : 12시간
	 * refreshToken 만료 시간 : 14일
	 */
	expiredTokenSeconds: number = 12 * 60 * 60;

	expiredRefreshTokenSeconds: number = 14 * 24 * 60 * 60;

	public setEncryptAccessToken(accessToken: string) {
		this.encryptAccessToken = accessToken;
	}

	public getAccessToken(): string | null {
		return (
			this.encryptAccessToken &&
			cryptoModule.decrypt(this.encryptAccessToken)
		);
	}

	public formatEncryptAccessToken(accessToken: string) {
		return cryptoModule.encrypt(accessToken);
	}
}

export default TokenService;
