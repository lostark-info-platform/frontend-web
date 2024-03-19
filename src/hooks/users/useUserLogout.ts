// import cookieModule from '@/module/cookie/cookie.module';
// import { apiService } from '@/services';
import { useMutation } from '@tanstack/react-query';

const useUserLogout = () => {
	return useMutation({
		...userLogoutMutationFactory(),
	});
};

export default useUserLogout;

export const userLogoutMutationFactory = () => ({
	mutationKey: ['users/logout'],
	mutationFn: async () => {
		// const refreshToken = cookieModule.getItem('refreshToken');
		// if (refreshToken) {
		// 	const response = await apiService.postUsersLogout({ refreshToken });
		// 	return response.data;
		// } else {
		// 	return null;
		// }
	},
});
