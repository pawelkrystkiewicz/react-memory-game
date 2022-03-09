// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import appConfig from '../store/slices/app-config'
import game from '../store/slices/game'
import sound from '../store/slices/sound'

function render(
	ui: any,
	{
		preloadedState,
		store = configureStore({
			reducer: {
				sound,
				game,
				appConfig,
			},
			preloadedState,
		}),
		...renderOptions
	} = {} as any
) {
	function Wrapper({ children }: any) {
		return <Provider store={store}>{children}</Provider>
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
