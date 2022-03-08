import { Button } from '@mantine/core'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GameGrid from '../components/game-grid'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'
import { gameCtrl, GameStage, selectGameState } from '../store/slices/game'
import * as GameLayout from '../components/game-layout'
import { Footer } from '../components/layout'
import GameStat from '../components/game-stat'
import colors from '../ui/colors'

export default function GamePage() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { selected, matched, moves, timeElapsed, stage } =
		useAppSelector(selectGameState)

	const handleGameReset = () => dispatch(gameCtrl.reset())
	const handleForceEndGame = () => {
		navigate(Nav.Home)
		dispatch(gameCtrl.cleanUp())
	}

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
	const CAN_RESTART_GAME = [GameStage.PLAYING, GameStage.ENDED].includes(stage)
	const CAN_FORFEIT_GAME = stage === GameStage.PLAYING
	const GAME_ENDED = stage === GameStage.ENDED

	return (
		<GameLayout.Body>
			<GameLayout.Title>{SETTINGS.appName}</GameLayout.Title>
			<GameLayout.Stats>
				<GameStat title='Moves' value={moves} color={colors.imperialBlue} />
				<GameStat
					title='Found'
					value={`${matched.length}/16`}
					color={colors.rebelGreen}
				/>
				<GameStat title='Time' value={timeElapsed} color={colors.rebelOrange} />
			</GameLayout.Stats>
			<GameLayout.Content>
				<GameGrid visible={GRID_VISIBLE} />
				{GAME_ENDED && <h2>You won!</h2>}
			</GameLayout.Content>

			<GameLayout.Buttons>
				<Button
					variant='outline'
					uppercase
					radius='xl'
					onClick={handleGameReset}
					disabled={!CAN_RESTART_GAME}
					fullWidth
				>
					Restart game
				</Button>

				<Button
					fullWidth
					variant='outline'
					uppercase
					radius='xl'
					onClick={handleForceEndGame}
				>
					{CAN_FORFEIT_GAME ? 'Forfeit' : 'Back'}
				</Button>
			</GameLayout.Buttons>
			<Footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</Footer>
		</GameLayout.Body>
	)
}
