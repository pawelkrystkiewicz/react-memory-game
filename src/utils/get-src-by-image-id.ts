import { GameDeck } from '../models/system'

export const getSrcByImageId = (
	id: string,
	deck: GameDeck
): string | undefined => deck.find(card => card.id === id)?.src
