import { Button, List, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Layout from '../components/layout'
import AppHeader from '../components/title'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'

export default function AboutPage() {
	return (
		<Layout.Main>
			<AppHeader />

			<Layout.Content>
				<h3>Resources used:</h3>
				<List>
					<List.Item>
						Vanilla game images:&nbsp;
						<a
							href='https://www.flaticon.com/free-icons/origami'
							title='origami icons'
							target='_blank'
							rel='noreferrer'
						>
							Origami icons by Freepik - Flaticon
						</a>
					</List.Item>
				</List>
			</Layout.Content>
			<Layout.Navigation>
				<Link to={Nav.Home}>
					<Button uppercase radius='lg' variant='subtle' fullWidth>
						Back
					</Button>
				</Link>
			</Layout.Navigation>

			<Layout.Footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</Layout.Footer>
		</Layout.Main>
	)
}
