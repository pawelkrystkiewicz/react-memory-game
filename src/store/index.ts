import { configureStore } from '@reduxjs/toolkit'
import soundsMiddleware from './middleware/sound'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import persistStore from 'redux-persist/lib/persistStore'
import storage from 'redux-persist/lib/storage'
import createRootReducer from './reducers'

const persistConfig = {
	key: 'root',
	storage,
}

export const store = configureStore({
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(soundsMiddleware),
	reducer: persistReducer(persistConfig, createRootReducer()),
	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
