import { apiService } from '@/services';
import { useQuery } from '@tanstack/react-query';

const testReactQueryFactory = (id: string) => ({
	queryKey: ['testReactQuery', id],
	queryFn: () => apiService.getTestReactQuery({ id }),
});

const useTestReactQuery = ({ id }: { id: string }) => {
	const { data } = useQuery({
		...testReactQueryFactory(id),
		throwOnError: true,
	});

	return {
		data,
	};
};

useTestReactQuery.queryFactory = (id: string) => testReactQueryFactory(id);

export default useTestReactQuery;
