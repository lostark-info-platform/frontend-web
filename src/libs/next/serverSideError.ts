import { GetServerSidePropsResult, Redirect } from 'next';

type ServerSidePropsResultExcludeProps = Exclude<
	GetServerSidePropsResult<any>,
	{ props: any }
>;

type PartialRedirect = Omit<Redirect, 'permanent'> & {
	permanent?: boolean;
};

class ServerSideError {
	private errorInfo: {
		serverSideResult: ServerSidePropsResultExcludeProps;
	} | null = null;

	public notFound() {
		this.setServerSideResult({ notFound: true });
		return this;
	}

	/**
	 * @description extendsGetServerSideProps 함수 내 서버사이드에서 특정 url로 redirect 할 때 호출합니다.
	 * @param destination
	 * * string
	 * 	- redirect 할 url 전달
	 * @param permanent
	 * * true
	 * 	- 308 상태코드
	 * 	- 영구 리다이렉트
	 * * false
	 * 	- 307 상태코드
	 * 	- 임시(temporary) 페이지로 리다이렉트
	 */
	public redirect(redirect: PartialRedirect) {
		this.setServerSideResult({
			redirect: {
				permanent: true,
				...redirect,
			},
		});
		return this;
	}

	public getErrorInfo() {
		return this.errorInfo;
	}

	private setServerSideResult(
		serverSideResult: ServerSidePropsResultExcludeProps
	) {
		this.errorInfo = {
			serverSideResult,
		};
	}
}

export default ServerSideError;
