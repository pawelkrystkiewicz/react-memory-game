import { Loader } from '@mantine/core'
import React, { Suspense } from 'react'
import Setup from './app.setup'
import { Provider } from 'react-redux'
import { store } from '../store'

const App: React.FC = () => (
	<Provider store={store}>
		<Suspense fallback={<Loader />}>
			<Setup />
		</Suspense>
	</Provider>
)

export default App
