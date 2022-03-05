import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from '../pages'
import MantineThemeConfig from '../ui/theme'

const Setup: React.FC = () => (
	// <PersistGate loading={<Spinner />} persistor={persistor}>
	<MantineProvider theme={MantineThemeConfig}>
		<BrowserRouter>
			<Routes>
				<Route index element={<IndexPage />} />
			</Routes>
		</BrowserRouter>
	</MantineProvider>
	//  </PersistGate>
)

export default Setup
