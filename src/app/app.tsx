import { Loader } from '@mantine/core'
import React, { Suspense } from 'react'
import Setup from './app.setup'

const App: React.FC = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Setup />
		</Suspense>
	)
}

export default App
