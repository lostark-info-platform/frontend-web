import styled from 'styled-components'

const TestStyled = styled.button`
  font-size:45px;
`

export default function Home() {
	function esLintTest() {
		console.log('em');
	}
	return <TestStyled onClick={esLintTest}>test</TestStyled>;
}
