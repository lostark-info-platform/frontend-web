import CryptoJS from 'crypto-js';

const cryptoModule = {
	encrypt(payload: string) {
		try {
			const secret_key = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY;
			if (!secret_key) {
				console.log('No Secret Key.');
				return null;
			}
			const encrypted = CryptoJS.AES.encrypt(
				payload,
				secret_key
			).toString();
			return encrypted;
		} catch (e) {
			console.log('Encryption error occur : ', e);
			return null;
		}
	},
	decrypt(encrypted: string) {
		try {
			const secret_key = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY;
			if (!secret_key) {
				console.log('No Secret Key.');
				return null;
			}
			const decrypted_bytes = CryptoJS.AES.decrypt(encrypted, secret_key);
			const decrypted = decrypted_bytes.toString(CryptoJS.enc.Utf8);
			return decrypted;
		} catch (e) {
			console.log('Decryption error occur : ', e);
			return null;
		}
	},
};

export default cryptoModule;
