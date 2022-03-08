import styled from '@emotion/styled'
import { StyledWithTheme } from '../models/system'

export const Body = styled.main<StyledWithTheme>`
	margin: 0 auto;
	z-index: 10;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.7fr 0.5fr 3.3fr 0.5fr min-content;
	gap: 0px 0px;
	grid-template-areas:
		'title'
		'stats'
		'content'
		'buttons'
		'footer';

	height: 100%;
	width: 100%;
	max-width: 500px;

`
export const Content = styled.div`
	grid-area: content;
	justify-self: center;
	align-self: center;
`
export const Buttons = styled.div`
	grid-area: buttons;
	display: flex;
	justify-content: space-between;
	width: 100%;

	& > *:not(:last-child) {
		margin-right: 20px;
	}

	justify-self: center;
	align-self: center;
`

export const Title = styled.h1`
	grid-area: title;
	text-transform: uppercase;
	justify-self: center;
`
export const Stats = styled.div`
	grid-area: stats;
	display: flex;
	justify-self: center;
	align-self: center;
	justify-content: space-between;
	width: 100%;
	max-width: 570px;
`
