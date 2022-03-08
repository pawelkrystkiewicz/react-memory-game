import styled from '@emotion/styled'
import { StyledWithColor } from '../../models/system'

export const GameStatStyled = styled.div<Partial<StyledWithColor>>`
	font-size: 14px;
	text-transform: uppercase;
	span {
		color: ${({ color }) => color ?? 'inherit'};
	}
`
