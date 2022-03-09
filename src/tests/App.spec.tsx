import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '../app/app'

it('should render all main components', () => {
	render(<App />)
	const title = screen.getByText(/memory game/i)
	const startGameButton = screen.getByText(/new game/i)
	const about = screen.getByText(/about/i)
	const footer = screen.getByText(/©/i)

	expect(title).toBeInTheDocument()
	expect(startGameButton).toBeInTheDocument()
	expect(about).toBeInTheDocument()
	expect(footer).toBeInTheDocument()
})
