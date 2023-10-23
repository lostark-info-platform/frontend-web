import api from '@/services/api';
import testReactQueryKeys from '@/services/queryKeys/testReactQuery';
import { useQuery } from '@tanstack/react-query';

const useTestReactQuery = ({ id }: { id: string }) => {
	const { data } = useQuery({
		queryKey: testReactQueryKeys.testReactQuery({ id }),
		queryFn: () => api.getTestReactQuery({ id }),
		throwOnError: true,
	});

	return {
		data,
	};
};

export default useTestReactQuery;
