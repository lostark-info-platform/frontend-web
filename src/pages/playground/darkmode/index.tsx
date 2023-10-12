import useToggleTheme from '@/hooks/common/useToggleTheme';
import { themePalette } from '@/theme/palette.theme';
import classNames from 'classnames';
import styled from 'styled-components';

const DarkmodePage = () => {
	return (
		<Wrapper>
			<Toggle />
			<Title>아리아 도서 이플</Title>
			<Text>
				아리아 도서 이플 비나리 컴퓨터 늘품 책방 별하 그루잠 나래 안녕
				함초롱하다 우리는 달볓 여우비 책방 사과 도담도담 포도 별빛
				도르레 미쁘다 산들림 그루잠 아련 여우비 비나리 우리는 여우비
				도서 함초롱하다 소솜 도담도담 컴퓨터 우리는 옅구름 아슬라 나래
				감사합니다 가온누리 소록소록 산들림 감사합니다 별빛 가온해 로운
				아리아 산들림 책방 다솜.
			</Text>
			<hr />
			<Fourth>Fourth</Fourth>
			<Third>Third</Third>
			<Secondary>Secondary</Secondary>
			<Body>Body</Body>
		</Wrapper>
	);
};

export default DarkmodePage;

const Wrapper = styled.div`
	padding: 20px;
	font-size: 24px;
`;

const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	margin-bottom: 12px;
`;
const Text = styled.p`
	font-size: 18px;
	max-width: 400px;
`;

const Fourth = styled.p`
	background: ${themePalette.fourth};
	width: 200px;
	height: 200px;
	margin-bottom: 20px;
`;
const Third = styled.p`
	background: ${themePalette.third};
	width: 200px;
	height: 200px;
	margin-bottom: 20px;
`;
const Secondary = styled.p`
	color: ${themePalette.secondary};
	margin-bottom: 20px;
`;
const Body = styled.p`
	color: ${themePalette.body};
	margin-bottom: 20px;
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
	border: 1px solid ${themePalette.body};
	border-radius: 100px;
	margin-bottom: 20px;
	margin-left: auto;
`;

const ToggleBullet = styled.span`
	position: absolute;
	left: 1px;
	top: 50%;
	transform: translate(0, -50%);
	background: ${themePalette.body};
	width: 20px;
	height: 20px;
	border-radius: 48px;

	transition: left 0.15s ease;
	.on & {
		left: 24px;
	}
`;
