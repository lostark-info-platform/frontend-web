import styled from 'styled-components';
import themeTypography from '@/theme/typography.theme';
import { ThemeTypogrpahyVariantSizeMap } from '@/types/typography.type';

const Heading = styled.p<ThemeTypogrpahyVariantSizeMap<'heading'>>(
	({ size }) => ({
		...themeTypography['heading'][size],
	})
);

export default Heading;
