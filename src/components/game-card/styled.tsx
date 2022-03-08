import styled from '@emotion/styled'
import { StyledWithTheme } from '../../models/system'

export const CardImage = styled.img`
	padding: 5px;
	height: 100%;
	width: auto;
	border-radius: 7px;
`
export const HiddenCard = styled.div<StyledWithTheme>`
	height: 100%;
	width: auto;
	aspect-ratio: 1/1;

	background-color: ${({ theme }) => theme.colors.spaceGrey};
	border-radius: 7px;
	box-shadow: 5px 5px 8px 5px
		${({ theme }) => theme.f.hex2rgba(theme.colors.spaceGrey, 17)};
	-moz-box-shadow: 5px 5px 8px 5px
		${({ theme }) => theme.f.hex2rgba(theme.colors.spaceGrey, 17)};
	-webkit-box-shadow: 5px 5px 8px 5px
		${({ theme }) => theme.f.hex2rgba(theme.colors.spaceGrey, 17)};
`
export const Card = styled.div<StyledWithTheme>`
	height: 75px;

	${({ theme }) => theme.media.mobile} {
		height: 110px;
	}
	${({ theme }) => theme.media.tablet} {
		height: 115px;
	}
	${({ theme }) => theme.media.laptop} {
		height: 120px;
	}
	${({ theme }) => theme.media.desktop} {
		height: 135px;
	}

	width: auto;
	aspect-ratio: 1/1;
`
