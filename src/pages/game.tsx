import { Button } from '@mantine/core'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameGrid from '../components/game-grid'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'
import { gameCtrl, GameStage, selectGameState } from '../store/slices/game'

export default function GamePage() {
	const dispatch = useAppDispatch()

	const { selected, matched, moves, timeElapsed, stage } =
		useAppSelector(selectGameState)

	const handleGameReset = () => dispatch(gameCtrl.reset())
	const handleForceEndGame = () => dispatch(gameCtrl.cleanUp())

	useEffect(() => {
		if (selected.length === 2) {
			const timer = setTimeout(() => {
				dispatch(gameCtrl.checkMatch())
				dispatch(gameCtrl.hideSelectedCards())
			}, 500)
			return () => clearTimeout(timer)
		}
	}, [selected])

	useEffect(() => {
		if (stage === GameStage.PLAYING) {
			const timer = setTimeout(() => {
				dispatch(gameCtrl.tick())
			}, 1000)
			return () => clearTimeout(timer)
		}
	})
	const GRID_VISIBLE = [GameStage.PLAYING, GameStage.READY].includes(stage)
	const GAME_ENDED = stage === GameStage.ENDED

	return (
		<div>
			<h1>{SETTINGS.appName}</h1>
			<div>{stage}</div>
			<div>{JSON.stringify(selected)}</div>
			<div>{JSON.stringify(matched)}</div>
			<div>{timeElapsed}</div>
			<div>{moves}</div>

			<GameGrid visible={GRID_VISIBLE} />
			{GAME_ENDED && <h2>You won!</h2>}

			<Button uppercase radius='lg' onClick={handleGameReset}>
				Restart game
			</Button>

			<Link to={Nav.Home}>
				<Button uppercase radius='lg' onClick={handleForceEndGame}>
					Forfeit
				</Button>
			</Link>
			<a
				href='https://www.flaticon.com/free-icons/origami'
				title='origami icons'
			>
				Origami icons created by Freepik - Flaticon
			</a>

			<footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</footer>
		</div>
	)
}
