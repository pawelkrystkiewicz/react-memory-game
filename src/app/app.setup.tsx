import { Loader, MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Nav } from '../models/routes'
import IndexPage from '../pages'
import AboutPage from '../pages/about'
import GamePage from '../pages/game'
import { persistor } from '../store'
import { GlobalStyle } from '../ui/global'
import { EmotionTheme, MantineThemeConfig } from '../ui/theme'
import { Background } from '../components/layout'
import { ThemeProvider } from '@emotion/react'

const Setup: React.FC = () => (
	<PersistGate loading={<Loader />} persistor={persistor}>
		<MantineProvider
			theme={{
				...MantineThemeConfig,
				headings: { fontFamily: 'Post No Bills Colombo, sans-serif' },
			}}
		>
			<ThemeProvider theme={EmotionTheme}>
				<GlobalStyle />
				<Background>
					<BrowserRouter>
						<Routes>
							<Route index element={<IndexPage />} />
							<Route path={Nav.Home} element={<IndexPage />} />
							<Route path={Nav.Game} element={<GamePage />} />
							<Route path={Nav.About} element={<AboutPage />} />
						</Routes>
					</BrowserRouter>
				</Background>
			</ThemeProvider>
		</MantineProvider>
	</PersistGate>
)

export default Setup
