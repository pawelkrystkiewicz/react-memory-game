import { Button, List, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Layout from '../components/layout'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'

export default function AboutPage() {
	return (
		<Layout.Main>
			<Layout.Title>{SETTINGS.appName}</Layout.Title>
			<h2>About</h2>
			<Link to={Nav.Home}>
				<Button uppercase radius='lg' variant="subtle">
					Back
				</Button>
			</Link>
			<Layout.Content>
				<h3>Resources used:</h3>
				<List>
					<List.Item>
						<a
							href='https://www.flaticon.com/free-icons/origami'
							title='origami icons'
						>
							Origami icons by Freepik - Flaticon
						</a>
					</List.Item>
				</List>
			</Layout.Content>
			<Layout.Footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</Layout.Footer>
		</Layout.Main>
	)
}
