import { GameDeck } from '../models/system'

const basePath = '/images/vanilla/'

const gameCharacters: string[] = [
	'boat',
	'butterfly',
	'crab',
	'frog',
	'heart',
	'rabbit',
	'star',
	'duck',
]

const deck: GameDeck = gameCharacters.map(name => ({
	src: `${basePath}${name}.jpg`,
	id: `${name}-1`,
}))

export default deck
