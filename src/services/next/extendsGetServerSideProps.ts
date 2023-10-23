import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

type Options = {
	temp: boolean;
};

type InjectedProps = {
	userLocation: string;
};

type GetServerSidePropsWithInjectedProps = GetServerSidePropsContext &
	InjectedProps;

type Callback = (
	context: GetServerSidePropsWithInjectedProps
) => Promise<GetServerSidePropsResult<any>>;

const extendsGetServerSideProps = (cb: Callback, options: Options) => {
	return async (ctx: GetServerSidePropsWithInjectedProps) => {
		console.log('options: ', options);
		try {
			const injectedContext = {
				...ctx,
			};
			return cb?.(injectedContext) || {};
		} catch (error) {
			console.error(error);
		}
	};
};

export default extendsGetServerSideProps;
