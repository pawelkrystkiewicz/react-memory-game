import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

export type AppConfig = {
	updatedAt?: string
	deviceId?: string
}

const initialState: AppConfig = {}

const appConfig = createSlice({
	name: 'appConfig',
	initialState,
	reducers: {
		setup: (state, action: PayloadAction<string>) => {
			const now = new Date().toISOString()
			if (state.deviceId) {
				state.updatedAt = now
				return
			}
			state.deviceId = action.payload
			state.updatedAt = now
		},
	},
})

export const { setup } = appConfig.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAppConfig = (state: RootState): AppConfig => state.appConfig

export default appConfig.reducer
