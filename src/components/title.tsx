import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'

export const Header = styled.div`
	font-size: 3em;
	font-weight: bold;
	grid-area: title;
	font-family: 'Post No Bills Colombo', sans-serif;
	text-transform: uppercase;
	justify-self: center;
	align-self: center;
	cursor: pointer;
	line-height: 1;

	display: flex;
	flex-direction: column;

	.subtitle {
		font-size: 16px;
		font-family: Poppins, sans-serif;
		font-weight: normal;
	}
`

const AppHeader = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const isHomePage = location.pathname !== Nav.Home

	const goToHome = () => isHomePage && navigate(Nav.Home)

	return (
		<Header onClick={goToHome}>
			<span>{SETTINGS.appName}</span>
			{isHomePage && <span className='subtitle'>{location.pathname}</span>}
		</Header>
	)
}

export default AppHeader
