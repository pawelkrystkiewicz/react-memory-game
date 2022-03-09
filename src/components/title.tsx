import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'

export const Title = styled.h1`
	grid-area: title;
	text-transform: uppercase;
	justify-self: center;
	align-self: center;
	cursor: pointer;
`

const AppTitle = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const goToHome = () => location.pathname !== Nav.Home && navigate(Nav.Home)

	return <Title onClick={goToHome}>{SETTINGS.appName}</Title>
}

export default AppTitle
