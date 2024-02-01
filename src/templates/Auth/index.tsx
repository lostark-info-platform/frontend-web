import { apiService } from '@/services';
import { PropsWithChildren } from 'react';

const AuthTemplate = ({ children }: PropsWithChildren) => {
	return (
		<div>
			<button
				onClick={() => {
					apiService.postAuthLogout();
				}}
			>
				logout
			</button>
			<div>{children}</div>
		</div>
	);
};

export default AuthTemplate;
