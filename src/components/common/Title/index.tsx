import styled from 'styled-components';
import themeTypography from '@/theme/typography.theme';
import { ThemeTypogrpahyVariantSizeMap } from '@/types/typography.type';
import { themeColorToObject } from '@/utils/common/theme.util';
import { ThemeColorPath } from '@/types/color.type';

type TitleProps = {
	/** title의 사이즈 */
	size: ThemeTypogrpahyVariantSizeMap<'title'>;
	/** title의 색상 */
	color?: ThemeColorPath;
};
const Title = styled.p<TitleProps>(({ size, color }) => ({
	...themeTypography['title'][size],
	...themeColorToObject(color),
}));

export default Title;
