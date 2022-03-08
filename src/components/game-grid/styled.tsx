import styled from '@emotion/styled'

export const GameGridStyled = styled.div`
	width: 80vw;
	height: 80vh;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-gap: 10px 10px;
	grid-template-areas:
		'. . . .'
		'. . . .'
		'. . . .'
		'. . . .';
`
