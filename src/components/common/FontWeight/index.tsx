import themeFontWeight from '@/theme/fontWeight.theme';
import styled from 'styled-components';

type FontWeightProps = {
	/** font의 두께 */
	weight: keyof typeof themeFontWeight;
};
const FontWeight = styled.span<FontWeightProps>(({ weight }) => ({
	fontWeight: themeFontWeight[weight],
}));

export default FontWeight;
