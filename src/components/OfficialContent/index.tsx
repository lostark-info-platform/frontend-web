import BackTemplate from '@/templates/BackTemplate';
import AppGutter from '../common/AppGutter';
import Spacing from '../common/Spacing';
import Tabs from '../common/Tabs';
import { OfficialContentTitle } from './OfficialContent.styles';
import OfficialContentInfo from './common/OfficialContentInfo';
import { useState } from 'react';
import { useRouter } from 'next/router';

export type OfficialContentType =
	| 'FIELD_BOSS'
	| 'KAOS_GATE'
	| 'ADVENTURE_ISLAND'
	| 'BEGINNING_ISLAND'
	| 'ABYSS_DUNGEON'
	| 'DEFAT_THE_GUARDIAN';

function OfficialContentView() {
	const router = useRouter();
	const [selectedOfficialContent, setSelectedOfficialContent] =
		useState<OfficialContentType>('FIELD_BOSS');
	return (
		<BackTemplate
			onBack={() => {
				router.back();
			}}
		>
			<AppGutter>
				<OfficialContentTitle>콘텐츠 전체보기</OfficialContentTitle>
				<Spacing size={12} />
				<Tabs
					defaultTabId='FIELD_BOSS'
					onChangeTab={(id) => {
						setSelectedOfficialContent(id as OfficialContentType);
					}}
					tabList={[
						{
							label: '필드보스',
							id: 'FIELD_BOSS',
						},
						{
							label: '카오스 게이트',
							id: 'KAOS_GATE',
						},
						{
							label: '모험섬',
							id: 'ADVENTURE_ISLAND',
						},
						{
							label: '태초의 섬',
							id: 'BEGINNING_ISLAND',
						},
						{
							label: '도전 어비스 던전',
							id: 'ABYSS_DUNGEON',
						},
						{
							label: '도전 가디언 토벌',
							id: 'DEFAT_THE_GUARDIAN',
						},
					]}
				/>
				<Spacing size={12} />
				<OfficialContentInfo
					currentOfficialContent={selectedOfficialContent}
				/>
			</AppGutter>
		</BackTemplate>
	);
}

export default OfficialContentView;
