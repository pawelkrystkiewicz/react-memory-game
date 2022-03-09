import { Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Layout from '../components/layout'
import AppHeader from '../components/title'
import { useAppDispatch } from '../hooks/redux'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'
import { gameCtrl } from '../store/slices/game'
import deck from '../game-config/vanilla'

export default function IndexPage() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const goToPath = (path: string) => navigate(path)
	const goToAbout = () => goToPath(Nav.About)
	const goToSelectGame = () => goToPath(Nav.SelectGame)

	return (
		<Layout.Main>
			<AppHeader />
			<Layout.Content>
				<Button
					fullWidth
					uppercase
					radius='xl'
					variant='white'
					onClick={goToSelectGame}
				>
					New game
				</Button>
				<Button
					onClick={goToAbout}
					fullWidth
					uppercase
					radius='xl'
					variant='outline'
				>
					About
				</Button>
			</Layout.Content>

			<Layout.Footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</Layout.Footer>
		</Layout.Main>
	)
}
