import Stack, { StackDirectionVariant } from '@/components/common/Stack';
import StorybookHeadingStack from '@/stories/storybookHelpers/components/StorybookHeadingStack';
import StorybookMockBox from '@/stories/storybookHelpers/components/StorybookMockBox';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Design System/Components/common/Stack',
	Component: Stack,
} as Meta<typeof Stack>;

export default meta;

export const Direction: StoryFn = () => {
	return (
		<StorybookHeadingStack
			heading='Stack'
			description='Stack 컴포넌트는 flex를 이용하여 컴포넌트를 쌓는 역할을 합니다.'
			stackList={[
				{
					title: 'row',
					description: '컴포넌트를 가로로 쌓습니다.',
					component: <DirectionStack direction='row' />,
				},
				{
					title: 'row-reverse',
					description: '컴포넌트를 가로로 반대로 쌓습니다.',
					component: <DirectionStack direction='row-reverse' />,
				},
				{
					title: 'column',
					description: '컴포넌트를 세로로 쌓습니다.',
					component: <DirectionStack direction='column' />,
				},
				{
					title: 'column-reverse',
					description: '컴포넌트를 세로로 반대로 쌓습니다.',
					component: <DirectionStack direction='column-reverse' />,
				},
			]}
		/>
	);
};

Direction.storyName = 'direction';

const DirectionStack = ({
	direction,
}: {
	direction: StackDirectionVariant;
}) => {
	return (
		<Stack direction={direction} margin={'12px'}>
			{Array.from({ length: 3 }).map((_, index) => (
				<StorybookMockBox key={index}>{index + 1}</StorybookMockBox>
			))}
		</Stack>
	);
};

// export const Spacing = ()=> {
// 	return (
// 		<StorybookHeadingStack
// 			heading='Stack'
// 			description='Stack 컴포넌트는 flex를 이용하여 컴포넌트를 쌓는 역할을 합니다.'
// 			stackList={[
// 				{
// 					title: 'row',
// 					component: <SpacingStack direction='row' />,
// 				},
// 				{
// 					title: 'row-reverse',
// 					component: <SpacingStack direction='row-reverse' />,
// 				},
// 				{
// 					title: 'column',
// 					component: <SpacingStack direction='column' />,
// 				},
// 				{
// 					title: 'column-reverse',
// 					component: <SpacingStack direction='column-reverse' />,
// 				},
// 			]}
// 		/>
// 	);
// }

export const Gap: StoryFn = () => {
	return (
		<Stack direction='column' gap={'10px'}>
			{Array.from({ length: 3 }).map((_, index) => (
				<StorybookMockBox key={index}>{index + 1}</StorybookMockBox>
			))}
		</Stack>
	);
};
Gap.storyName = 'gap';

export const Margin: StoryFn = () => {
	return (
		<Stack direction='column' margin={'10px'}>
			{Array.from({ length: 3 }).map((_, index) => (
				<StorybookMockBox key={index}>{index + 1}</StorybookMockBox>
			))}
		</Stack>
	);
};
Margin.storyName = 'margin';
