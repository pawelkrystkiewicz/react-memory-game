import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameDeck } from '../../models/system'
import { duplicateWithUniqueId } from '../../utils/duplicate-array'
import { getSrcByImageId } from '../../utils/get-src-by-image-id'
import { removeGameImageId } from '../../utils/remove-id'
import { shuffleArray } from '../../utils/shuffle-array'
import { RootState } from '../index'

export enum GameStage {
	VOID = 'VOID',
	READY = 'READY',
	PLAYING = 'PLAYING',
	ENDED = 'ENDED',
}

export type GameState = {
	availableCardsCache: GameDeck
	deck: GameDeck
	selected: string[]
	matched: string[]
	moves: number
	timeElapsed: number
	stage: GameStage
}

const initialState: GameState = {
	availableCardsCache: [],
	selected: [],
	deck: [],
	matched: [],
	moves: 0,
	timeElapsed: 0,
	stage: GameStage.VOID,
}

const game = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setup: (state, action: PayloadAction<GameDeck>) => {
			/*
				1. shuffle provided image set {id, src}[]
				2. take only necessary amount of images
				3. duplicate array with unique id to create full deck
			*/
			state.availableCardsCache = action.payload

			const images = shuffleArray(action.payload).slice(0, 8)
			state.deck = shuffleArray(duplicateWithUniqueId(images))
			state.moves = 0
			state.timeElapsed = 0
			state.stage = GameStage.READY
		},
		reset: state => {
			const images = shuffleArray(state.availableCardsCache).slice(0, 8)
			state.deck = shuffleArray(duplicateWithUniqueId(images))
			state.moves = 0
			state.timeElapsed = 0
			state.stage = GameStage.READY
			state.selected = []
			state.matched = []
		},
		cleanUp: state => {
			return (state = initialState)
		},
		playerMove: (state, action: PayloadAction<string>) => {
			if (state.stage === GameStage.READY) {
				state.stage = GameStage.PLAYING
			}

			if (state.selected.length < 2) {
				state.selected.push(action.payload)
			}
		},
		checkMatch: state => {
			if (state.selected.length === 2) {
				state.moves += 1
				const [id1, id2] = state.selected
				const cardName1 = removeGameImageId(id1)
				const cardName2 = removeGameImageId(id2)

				if (cardName1 === cardName2) {
					const src = getSrcByImageId(id1, state.deck)
					src && state.matched.push(src)
				}
			}

			if (state.matched.length === 8) {
				state.stage = GameStage.ENDED
			}
		},
		hideSelectedCards: state => {
			state.selected = []
		},
		tick: state => {
			state.timeElapsed += 1
		},
	},
})

export const gameCtrl = game.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGameState = (state: RootState): GameState => state.game

export default game.reducer
