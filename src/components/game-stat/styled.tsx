import styled from '@emotion/styled'
import { StyledWithColor } from '../../models/system'

export const GameStatStyled = styled.div<Partial<StyledWithColor>>`
	font-size: 16px;
	text-transform: uppercase;
	span {
		font-family: Post No Bills Colombo, sans-serif;
		font-weight: bold;
		color: ${({ color }) => color ?? 'inherit'};
		text-shadow: 0px 0px 7px ${({ color }) => color};
	}
`
