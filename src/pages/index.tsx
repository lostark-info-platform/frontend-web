// import { GetServerSidePropsContext } from 'next';
import Home from '@/components/Home';

export default function HomePage() {
	return <Home />;
}

export const getServerSideProps = async () =>
	// ctx: GetServerSidePropsContext
	{
		// const accessToken = ctx.req.cookies.accessToken;

		return {
			props: {},
		};
	};
