import { Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Layout from '../components/layout'
import AppHeader from '../components/title'
import gameModes from '../game-config'
import { useAppDispatch } from '../hooks/redux'
import { Nav } from '../models/routes'
import { GameDeck } from '../models/system'
import SETTINGS from '../settings'
import { gameCtrl } from '../store/slices/game'
import { sfx } from '../store/slices/sound'

export default function SelectGamePage() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const playCloseSound = () => dispatch(sfx.close())
	const playClickSound = () => dispatch(sfx.click())

	const goToPath = (path: string) => navigate(path)
	const goToMenu = () => {
		playCloseSound()
		goToPath(Nav.Home)
	}

	const handleGameStart = (deck: GameDeck) => {
		playClickSound()

		dispatch(gameCtrl.setup(deck))
		goToPath(Nav.Game)
	}

	return (
		<Layout.Main>
			<AppHeader />
			<Layout.Content>
				{Object.keys(gameModes).map(key => (
					<Button
						key={gameModes[key].title}
						fullWidth
						uppercase
						radius='xl'
						variant='outline'
						onClick={() => handleGameStart(gameModes[key].deck)}
					>
						{gameModes[key].title}
					</Button>
				))}
			</Layout.Content>
			<Layout.Navigation>
				<Button
					onClick={goToMenu}
					fullWidth
					uppercase
					radius='xl'
					variant='white'
				>
					Menu
				</Button>
			</Layout.Navigation>
			<Layout.Footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</Layout.Footer>
		</Layout.Main>
	)
}
