import { Button, List } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'

export default function AboutPage() {
	return (
		<div>
			<h1>{SETTINGS.appName}</h1>
			<h2>About</h2>
			<Link to={Nav.Home}>
				<Button uppercase radius='lg'>
					Home
				</Button>
			</Link>

			<h3>Resources used:</h3>
			<List>
				<List.Item>
					<a
						href='https://www.flaticon.com/free-icons/origami'
						title='origami icons'
					>
						Origami icons created by Freepik - Flaticon
					</a>
					- vanilla game mode pictures
				</List.Item>
			</List>

			<footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</footer>
		</div>
	)
}
