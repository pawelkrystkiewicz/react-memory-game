import { Button } from '@mantine/core'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GameGrid from '../components/game-grid'
import * as GameLayout from '../components/game-layout'
import GameStat from '../components/game-stat'
import { Footer } from '../components/layout'
import AppHeader from '../components/title'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'
import { gameCtrl, GameStage, selectGameState } from '../store/slices/game'
import { sfx } from '../store/slices/sound'
import colors from '../ui/colors'
import { compareSelected } from '../utils/compare-selected'

export default function GamePage() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { selected, matched, moves, timeElapsed, stage } =
		useAppSelector(selectGameState)

	const handleGameReset = () => {
		dispatch(sfx.quest())
		dispatch(gameCtrl.reset())
	}
	const handleForceEndGame = () => {
		dispatch(sfx.close())
		navigate(Nav.Home)
		dispatch(gameCtrl.cleanUp())
	}

	useEffect(() => {
		if (selected.length === 2) {
			const timer1 = setTimeout(() => {
				const areMatching = compareSelected(selected)
				areMatching && dispatch(sfx.success())
				dispatch(gameCtrl.checkMatch())
			}, 500)

			const timer2 = setTimeout(() => {
				dispatch(gameCtrl.hideSelectedCards())
			}, 1500)
			return () => {
				clearTimeout(timer1)
				clearTimeout(timer2)
			}
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

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(sfx.quest())
		}, 200)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (matched.length === 8) {
			dispatch(sfx.gameEnd())
		}
	}, [matched])

	const GRID_VISIBLE = [GameStage.PLAYING, GameStage.READY].includes(stage)
	const CAN_RESTART_GAME = [GameStage.PLAYING, GameStage.ENDED].includes(stage)
	const CAN_FORFEIT_GAME = stage === GameStage.PLAYING
	const GAME_ENDED = stage === GameStage.ENDED

	return (
		<GameLayout.Body>
			<AppHeader />
			<GameLayout.Stats>
				<GameStat title='Moves' value={moves} color={colors.imperialBlue} />
				<GameStat
					title='Found'
					value={`${matched.length}/8`}
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
