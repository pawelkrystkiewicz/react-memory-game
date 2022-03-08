import { Loader, MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Nav } from '../models/routes'
import IndexPage from '../pages'
import AboutPage from '../pages/about'
import GamePage from '../pages/game'
import { persistor } from '../store'
import { GlobalStyle } from '../ui/global'
import MantineThemeConfig from '../ui/theme'

const Setup: React.FC = () => (
	<PersistGate loading={<Loader />} persistor={persistor}>
		<MantineProvider theme={MantineThemeConfig}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route index element={<IndexPage />} />
					<Route path={Nav.Home} element={<IndexPage />} />
					<Route path={Nav.Game} element={<GamePage />} />
					<Route path={Nav.About} element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
	</PersistGate>
)

export default Setup
