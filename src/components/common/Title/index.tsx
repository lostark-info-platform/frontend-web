import styled from 'styled-components';
import themeTypography from '@/theme/typography.theme';
import { ThemeTypogrpahyVariantSizeMap } from '@/types/typography.type';

const Title = styled.p<ThemeTypogrpahyVariantSizeMap<'title'>>(({ size }) => ({
	...themeTypography['title'][size],
}));

export default Title;
