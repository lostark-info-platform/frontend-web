import { apiService } from '@/services';
import { RequestUsersRegister } from '@/services/api/types/models.types';
import { useMutation } from '@tanstack/react-query';

const useUserRegister = () => {
	return useMutation({
		...userRegisterMutationFactory(),
	});
};

export default useUserRegister;

export const userRegisterMutationFactory = () => ({
	mutationKey: ['users/register'],
	mutationFn: async (payload: RequestUsersRegister) => {
		const response = await apiService.postUsersRegister(payload);
		return response.data;
	},
});
