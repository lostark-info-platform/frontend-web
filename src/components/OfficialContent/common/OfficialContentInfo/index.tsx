import Flex from '@/components/common/Flex';
import {
	OfficialContentInfoContentSubTitle,
	OfficialContentInfoContentText,
	OfficialContentInfoContentThumbnail,
	OfficialContentInfoContentTitle,
	OfficialContentInfoContentWrapper,
	OfficialContentInfoHeaderTimeOut,
	OfficialContentInfoHeaderTitle,
	OfficialContentInfoHeaderWrapper,
	OfficialContentInfoRewardThumbnail,
	OfficialContentInfoWrapper,
} from './OfficialContentInfo.styles';
import Spacing from '@/components/common/Spacing';
import { OfficialContentType } from '../..';
import ButtonTabs from '@/components/common/ButtonTabs';

type OfficialContentInfoProps = {
	currentOfficialContent: OfficialContentType;
};
function OfficialContentInfo({
	currentOfficialContent,
}: OfficialContentInfoProps) {
	return (
		<>
			{
				{
					FIELD_BOSS: <FieldBossOfficialContentInfo />,
					KAOS_GATE: <KaosGateOfficialContentInfo />,
					ADVENTURE_ISLAND: <AdventureOfficialContentInfo />,
					BEGINNING_ISLAND: <BeginningIslandOfficialContentInfo />,
					ABYSS_DUNGEON: <AbyssDungeonOfficialContentInfo />,
					DEFAT_THE_GUARDIAN: <DeFatTheGuardianOfficialContentInfo />,
				}[currentOfficialContent]
			}
		</>
	);
}

export default OfficialContentInfo;

// 필드보스
function FieldBossOfficialContentInfo() {
	return (
		<>
			<ButtonTabs
				defaultTabId='지역1'
				tabList={[
					{
						label: '지역1',
						id: '지역1',
					},
					{
						label: '지역2',
						id: '지역2',
					},
					{
						label: '지역3',
						id: '지역3',
					},
					{
						label: '지역4',
						id: '지역4',
					},
					{
						label: '지역5',
						id: '지역5',
					},
				]}
			/>
			<Spacing size={12} />
			<OfficialContentInfoWrapper>
				<OfficialContentInfoHeaderWrapper>
					<OfficialContentInfoHeaderTitle>
						필드보스
					</OfficialContentInfoHeaderTitle>
					<OfficialContentInfoHeaderTimeOut>
						00:00
					</OfficialContentInfoHeaderTimeOut>
				</OfficialContentInfoHeaderWrapper>
				<OfficialContentInfoContentWrapper>
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							아우리온
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							필요 템 레벨
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<OfficialContentInfoContentText>
							100
						</OfficialContentInfoContentText>
						<Spacing size={8} />
					</div>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
				</OfficialContentInfoContentWrapper>
			</OfficialContentInfoWrapper>
		</>
	);
}

// 카오스게이트
function KaosGateOfficialContentInfo() {
	return (
		<>
			<OfficialContentInfoWrapper>
				<OfficialContentInfoHeaderWrapper>
					<OfficialContentInfoHeaderTitle>
						카오스 게이트
					</OfficialContentInfoHeaderTitle>
					<OfficialContentInfoHeaderTimeOut>
						00:00
					</OfficialContentInfoHeaderTimeOut>
				</OfficialContentInfoHeaderWrapper>
				<OfficialContentInfoContentWrapper>
					<div>
						<OfficialContentInfoContentSubTitle>
							필요 템 레벨
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<OfficialContentInfoContentText>
							100
						</OfficialContentInfoContentText>
						<Spacing size={8} />
					</div>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
				</OfficialContentInfoContentWrapper>
			</OfficialContentInfoWrapper>
		</>
	);
}

// 모험섬
function AdventureOfficialContentInfo() {
	return (
		<>
			<OfficialContentInfoWrapper>
				<OfficialContentInfoHeaderWrapper>
					<OfficialContentInfoHeaderTitle>
						모험섬
					</OfficialContentInfoHeaderTitle>
					<OfficialContentInfoHeaderTimeOut>
						등장 예정
					</OfficialContentInfoHeaderTimeOut>
				</OfficialContentInfoHeaderWrapper>
				<OfficialContentInfoContentWrapper>
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							고요한 안식의 섬
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
					<Spacing size={16} />
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							블루홀 섬
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
					<Spacing size={16} />
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							쿵덕쿵 아일랜드
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
				</OfficialContentInfoContentWrapper>
			</OfficialContentInfoWrapper>
		</>
	);
}

// 태초의 섬
function BeginningIslandOfficialContentInfo() {
	return (
		<>
			<OfficialContentInfoWrapper>
				<OfficialContentInfoHeaderWrapper>
					<OfficialContentInfoHeaderTitle>
						태초의 섬
					</OfficialContentInfoHeaderTitle>
					<OfficialContentInfoHeaderTimeOut>
						00:00
					</OfficialContentInfoHeaderTimeOut>
				</OfficialContentInfoHeaderWrapper>
				<OfficialContentInfoContentWrapper>
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							아우리온
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							필요 템 레벨
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<OfficialContentInfoContentText>
							100
						</OfficialContentInfoContentText>
						<Spacing size={8} />
					</div>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
				</OfficialContentInfoContentWrapper>
			</OfficialContentInfoWrapper>
		</>
	);
}

// 도전 어비스 던전
function AbyssDungeonOfficialContentInfo() {
	return (
		<>
			<OfficialContentInfoWrapper>
				<OfficialContentInfoHeaderWrapper>
					<OfficialContentInfoHeaderTitle>
						도전 어비스 던전
					</OfficialContentInfoHeaderTitle>
					<OfficialContentInfoHeaderTimeOut>
						00:00
					</OfficialContentInfoHeaderTimeOut>
				</OfficialContentInfoHeaderWrapper>
				<OfficialContentInfoContentWrapper>
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							아우리온
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							필요 템 레벨
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<OfficialContentInfoContentText>
							100
						</OfficialContentInfoContentText>
						<Spacing size={8} />
					</div>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
				</OfficialContentInfoContentWrapper>
			</OfficialContentInfoWrapper>
		</>
	);
}

// 도전 어비스 던전
function DeFatTheGuardianOfficialContentInfo() {
	return (
		<>
			<OfficialContentInfoWrapper>
				<OfficialContentInfoHeaderWrapper>
					<OfficialContentInfoHeaderTitle>
						도전 가디언 토벌
					</OfficialContentInfoHeaderTitle>
					<OfficialContentInfoHeaderTimeOut>
						3일 남음
					</OfficialContentInfoHeaderTimeOut>
				</OfficialContentInfoHeaderWrapper>
				<OfficialContentInfoContentWrapper>
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							침묵의 왕
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							필요 템 레벨
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<OfficialContentInfoContentText>
							100
						</OfficialContentInfoContentText>
						<Spacing size={8} />
					</div>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
				</OfficialContentInfoContentWrapper>
			</OfficialContentInfoWrapper>
			<Spacing size={12} />
			<OfficialContentInfoWrapper>
				<OfficialContentInfoHeaderWrapper>
					<OfficialContentInfoHeaderTitle>
						모험섬
					</OfficialContentInfoHeaderTitle>
					<OfficialContentInfoHeaderTimeOut>
						등장 예정
					</OfficialContentInfoHeaderTimeOut>
				</OfficialContentInfoHeaderWrapper>
				<OfficialContentInfoContentWrapper>
					<Flex gap={16}>
						<OfficialContentInfoContentThumbnail
							src={
								'/assets/mock-images/mock-official-schedule-thumbnail.png'
							}
							alt='콘텐츠'
						/>
						<OfficialContentInfoContentTitle>
							마법의 그라가스
						</OfficialContentInfoContentTitle>
					</Flex>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							필요 템 레벨
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<OfficialContentInfoContentText>
							100
						</OfficialContentInfoContentText>
						<Spacing size={8} />
					</div>
					<Spacing size={16} />
					<div>
						<OfficialContentInfoContentSubTitle>
							보상
						</OfficialContentInfoContentSubTitle>
						<Spacing size={8} />
						<Flex gap={8}>
							{[1, 2, 3, 4, 5].map((item) => (
								<OfficialContentInfoRewardThumbnail
									src={`/assets/mock-images/mock-official-schedule-reward-thumbnail-0${item}.png`}
									alt='보상'
									key={item}
								/>
							))}
						</Flex>
					</div>
				</OfficialContentInfoContentWrapper>
			</OfficialContentInfoWrapper>
		</>
	);
}
