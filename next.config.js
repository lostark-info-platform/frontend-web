/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	publicRuntimeConfig: {
		PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
