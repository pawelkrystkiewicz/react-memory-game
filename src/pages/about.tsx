import { Button, List } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Layout from '../components/layout'
import AppHeader from '../components/title'
import { useAppDispatch } from '../hooks/redux'
import { Nav } from '../models/routes'
import SETTINGS from '../settings'
import { sfx } from '../store/slices/sound'

export default function AboutPage() {
	const dispatch = useAppDispatch()
	const playCloseSound = () => dispatch(sfx.close())

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
							title='FlatIcon'
							target='_blank'
							rel='noreferrer'
						>
							Origami icons by Freepik - Flaticon
						</a>
					</List.Item>
					<List.Item>
						KotOR game images:&nbsp;
						<a
							href='https://deadlystream.com/files/file/1213-hd-npc-portraits/'
							title='DeadlyStream'
							target='_blank'
							rel='noreferrer'
						>
							KotOR character portraits by <i>ndix UR</i>
						</a>
					</List.Item>
				</List>
			</Layout.Content>
			<Layout.Navigation>
				<Link to={Nav.Home}>
					<Button
						onClick={playCloseSound}
						uppercase
						radius='lg'
						variant='white'
						fullWidth
					>
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
