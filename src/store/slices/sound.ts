import { createSlice } from '@reduxjs/toolkit'
import { SoundMap } from '../middleware/sound-map'

const nothing = ''

export const soundSlice = createSlice({
	name: 'sound',
	initialState: {},
	reducers: {
		navLeft: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: nothing } },
			}),
		},
		navRight: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: nothing } },
			}),
		},
		loading: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: nothing } },
			}),
		},
		success: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: nothing } },
			}),
		},
		error: {
			reducer: () => {
				// do nothing
			},
			prepare: () => ({
				payload: undefined,
				meta: { sound: { play: nothing } },
			}),
		},
	},
})

export const soundboard = soundSlice.actions

export default soundSlice.reducer
