import styled from 'styled-components';
import themeTypography from '@/theme/typography.theme';
import { ThemeTypogrpahyVariantSizeMap } from '@/types/typography.type';

const Body = styled.p<ThemeTypogrpahyVariantSizeMap<'body'>>(({ size }) => ({
	...themeTypography['body'][size],
}));

export default Body;
