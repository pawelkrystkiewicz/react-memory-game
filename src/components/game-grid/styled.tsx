import styled from '@emotion/styled'
import { StyledWithTheme } from '../../models/system'

export const GameGridStyled = styled.div<StyledWithTheme>`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-gap: 10px 10px;
	grid-template-areas:
		'. . . .'
		'. . . .'
		'. . . .'
		'. . . .';

	${({ theme }) => theme.media.tablet} {
		grid-gap: 15px 15px;
	}
`
