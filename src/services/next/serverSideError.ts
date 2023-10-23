import { GetServerSidePropsResult } from 'next';

type ServerSideErrorResultType = Exclude<
	GetServerSidePropsResult<any>,
	{ props: any | Promise<any> }
>;

class ServerSideError {
	private errorInfo: ServerSideErrorResultType;

	constructor(props: ServerSideErrorResultType) {
		this.errorInfo = props;
	}

	public getError() {
		throw this.errorInfo;
	}
}

export default ServerSideError;
