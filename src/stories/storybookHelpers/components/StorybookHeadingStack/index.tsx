import { ReactNode } from 'react';
import StorybookHeading from '../StorybookHeading';
import StorybookStack from '../StorybookStack';
import StorybookTitle from '../StorybookTitle';
import StorybookSpacing from '../StorybookSpacing';
import StorybookBlock from '../StorybookBlock';
import StorybookBody from '../StorybookBody';

type StorybookHeadingStackProps = {
	heading: string;
	description?: string;
	stackList: {
		title: string;
		description?: string;
		component: ReactNode;
	}[];
};
const StorybookHeadingStack = ({
	heading,
	description,
	stackList,
}: StorybookHeadingStackProps) => {
	return (
		<div>
			<StorybookHeading>{heading}</StorybookHeading>
			{description && (
				<>
					<StorybookSpacing direction='vertical' spacing='8px' />
					<StorybookBody>{description}</StorybookBody>
				</>
			)}
			<StorybookSpacing direction='vertical' spacing='40px' />
			<StorybookStack direction='column' margin='24px'>
				{stackList.map(({ title, description, component }) => (
					<div key={title}>
						<StorybookTitle>{title}</StorybookTitle>
						{description && (
							<>
								<StorybookSpacing
									direction='vertical'
									spacing='4px'
								/>
								<StorybookBody>{description}</StorybookBody>
							</>
						)}
						<StorybookSpacing direction='vertical' spacing='12px' />
						<StorybookBlock>{component}</StorybookBlock>
					</div>
				))}
			</StorybookStack>
		</div>
	);
};

export default StorybookHeadingStack;
