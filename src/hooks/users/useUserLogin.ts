import { apiService } from '@/services';
import { RequestUsersLogin } from '@/services/api/types/models.types';
import { useMutation } from '@tanstack/react-query';

const useUserLogin = () => {
	return useMutation({
		...userLoginMutationFactory(),
	});
};

export default useUserLogin;

export const userLoginMutationFactory = () => ({
	mutationKey: ['users/login'],
	mutationFn: async (payload: RequestUsersLogin) => {
		const response = await apiService.postUsersLogin(payload);
		return response.data;
	},
});
