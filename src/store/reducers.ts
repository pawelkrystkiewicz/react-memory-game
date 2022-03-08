import appConfig from './slices/app-config'
import sound from './slices/sound'
import game from './slices/game'
import { combineReducers } from 'redux'

const createRootReducer = () =>
	combineReducers({
		sound,
		game,
		appConfig,
	})

export default createRootReducer
