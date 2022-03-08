import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { selectGameState } from '../../store/slices/game'
import { Card, CardImage, HiddenCard } from './styled'

interface GameCardProps {
	src: string
	id: string
}

const GameCard: React.FC<GameCardProps> = ({ src, id }) => {
	const { selected, matched } = useAppSelector(selectGameState)

	const show = selected.includes(id)
	const hide = matched.includes(src)
	return hide ? (
		<div></div>
	) : (
		<Card key={id}>
			{show ? <CardImage src={src} /> : <HiddenCard id={id} />}
		</Card>
	)
}

export default GameCard
