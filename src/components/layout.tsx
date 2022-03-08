import styled from '@emotion/styled'
import { StyledWithTheme } from '../models/system'
import SETTINGS from '../settings'

export const Background = styled.div<StyledWithTheme>`
	color: ${({ theme }) => theme.colors.hothSnow};
	height: 100vh;
	width: 100vw;
	background-image: url(${SETTINGS.backgroundImagePath});
	padding: 40px 20px 10px;

	background-attachment: fixed;
	background-size: auto 100%;
	background-position: center;

	background-color: ${({ theme }) => theme.colors.spaceGrey};
`

export const Main = styled.main<StyledWithTheme>`
	margin: 0 auto;
	z-index: 10;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1.3fr 1.5fr min-content;
	gap: 0px 0px;
	grid-template-areas:
		'title'
		'content'
		'footer';

	height: 100%;
	width: 100%;
	max-width: 500px;
`
export const Content = styled.div`
	grid-area: content;
	display: flex;
	flex-direction: column;
	& > *:not(:last-child) {
		margin-bottom: 20px;
	}
`
export const Footer = styled.footer`
	grid-area: footer;
	margin: 0 auto;
`
export const Title = styled.h1`
	grid-area: title;
	text-transform: uppercase;
	justify-self: center;
	align-self: center;
`
