declare module 'next/config' {
	type NextConfig = {
		publicRuntimeConfig: {
			PUBLIC_API_BASE_URL: string;
		};
	};

	declare function getConfig(): NextConfig;

	export default getConfig;
}
