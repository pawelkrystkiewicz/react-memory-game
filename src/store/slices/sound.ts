import { createSlice } from '@reduxjs/toolkit'
import { SoundMap } from '../middleware/sound-map'

export const soundSlice = createSlice({
	name: 'sound',
	initialState: {},
	reducers: {
		quest: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: SoundMap.Quest } },
			}),
		},
		close: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: SoundMap.Close } },
			}),
		},
		click: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: SoundMap.Click } },
			}),
		},
		success: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: SoundMap.Complete } },
			}),
		},
		gameEnd: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: SoundMap.Level } },
			}),
		},
		error: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: SoundMap.Error } },
			}),
		},
	},
})

export const sfx = soundSlice.actions

export default soundSlice.reducer
