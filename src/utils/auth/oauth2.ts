import { OAuth2Providers } from '@/services/api/types/models.types';
import getConfig from 'next/config';

type GetOAuth2CodeProps = {
	provider: OAuth2Providers;
	redirectTo: string;
};
export const getOAuth2Code = ({ provider, redirectTo }: GetOAuth2CodeProps) => {
	return `${
		getConfig().publicRuntimeConfig.PUBLIC_API_BASE_URL
	}/oauth2/code/${provider}?state=${redirectTo}`;
};
