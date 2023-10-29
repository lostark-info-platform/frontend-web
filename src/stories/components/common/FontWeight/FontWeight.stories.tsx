import Body from '@/components/common/Body';
import FontWeight from '@/components/common/FontWeight';
import { Meta } from '@storybook/react';

const meta = {
	title: 'Design System/Components/common/FontWeight',
	Component: FontWeight,
} as Meta<typeof FontWeight>;

export default meta;

export const Basics = () => {
	return (
		<>
			<Body size={18}>
				안녕하세요. <FontWeight weight='semiBold'>홍길동</FontWeight>
				입니다.
			</Body>
		</>
	);
};
