import useToggleTheme from '@/hooks/common/useToggleTheme';
import themeSementicColor from '@/theme/sementicColor.theme';

import classNames from 'classnames';
import styled from 'styled-components';

const DarkmodePage = () => {
	return (
		<div>
			<Toggle />
			<Title>아리아 도서 이플</Title>
			<hr />
		</div>
	);
};

export default DarkmodePage;

const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	margin-bottom: 12px;
`;

const Toggle = () => {
	const [theme, toggle] = useToggleTheme();
	return (
		<ToggleWrapper
			className={classNames({
				on: theme === 'dark',
			})}
			onClick={() => {
				toggle();
			}}
		>
			<ToggleBullet />
		</ToggleWrapper>
	);
};

const ToggleWrapper = styled.div`
	position: relative;
	width: 48px;
	height: 24px;
	border: 1px solid ${themeSementicColor.primary};
	border-radius: 100px;
	margin-bottom: 20px;
	margin-left: auto;
`;

const ToggleBullet = styled.span`
	position: absolute;
	left: 1px;
	top: 50%;
	transform: translate(0, -50%);
	background: ${themeSementicColor.primary};
	width: 20px;
	height: 20px;
	border-radius: 48px;

	transition: left 0.15s ease;
	.on & {
		left: 24px;
	}
`;
