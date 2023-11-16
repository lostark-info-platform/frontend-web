import styled from 'styled-components';
import themeTypography from '@/theme/typography.theme';
import { ThemeTypogrpahyVariantSizeMap } from '@/types/theme/typography.type';
import { themeColorToObject } from '@/utils/common/theme.util';
import { ThemeColorPath } from '@/types/theme/color.type';

type HeadingProps = {
	/** heading의 사이즈 */
	size: ThemeTypogrpahyVariantSizeMap<'heading'>;
	/** heading의 색상 */
	color?: ThemeColorPath;
};
const Heading = styled.p<HeadingProps>(({ size, color }) => ({
	...themeTypography['heading'][size],
	...themeColorToObject(color),
}));

export default Heading;
