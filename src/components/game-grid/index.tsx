import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { GameImage } from '../../models/system'
import { gameCtrl, selectGameState } from '../../store/slices/game'
import { sfx } from '../../store/slices/sound'
import GameCard from '../game-card'
import { GameGridStyled } from './styled'

interface GameGridProps {
	visible: boolean
}

const GameGrid: React.FC<GameGridProps> = ({ visible }) => {
	const { deck } = useAppSelector(selectGameState)
	const dispatch = useAppDispatch()

	const handleGridClick = (event: any) => {
		const { id } = event.target
		if (id) {
			dispatch(gameCtrl.playerMove(id))
			dispatch(sfx.click())
		}
	}

	return visible ? (
		<GameGridStyled onClick={handleGridClick}>
			{deck.length > 0 &&
				deck.map((card: GameImage) => (
					<GameCard src={card.src} id={card.id} key={card.id} />
				))}
		</GameGridStyled>
	) : null
}

export default GameGrid
