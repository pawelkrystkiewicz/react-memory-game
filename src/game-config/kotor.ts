import { GameDeck } from '../models/system'

const basePath = '/images/kotor-portraits/'

const gameCharacters: string[] = [
	'bastila',
	'canderous',
	'carth',
	'hk47',
	'jolee',
	'juhani',
	'mission',
	't3m4',
	'trask',
	'zaalbar',
]

const deck: GameDeck = gameCharacters.map(name => ({
	src: `${basePath}${name}.jpg`,
	id: `${name}-1`,
}))

export default deck
