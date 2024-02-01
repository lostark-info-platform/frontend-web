import withAuthSSR from '@/libs/next/withAuthSSR';
import { apiService, tokenService } from '@/services';
import { useEffect } from 'react';

const AuthUserPage = (props) => {
	console.log('props: ', props);

	useEffect(() => {
		(async () => {
			console.log(tokenService.getAccessToken());
			const response = await apiService.getUsersMe();
			console.log('response: ', response);
		})();
	}, []);
	return <></>;
};

export default AuthUserPage;

export const getServerSideProps = withAuthSSR();
