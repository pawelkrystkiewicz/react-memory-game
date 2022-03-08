import React, { useState } from 'react'
import SETTINGS from '../settings'
import { Button } from '@mantine/core'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Nav } from '../models/routes'
import Boat from '../assets/images/boat.png'
import Butterfly from '../assets/images/butterfly.png'
import Crab from '../assets/images/crab.png'
import Duck from '../assets/images/duck.png'
import Frog from '../assets/images/frog.png'
import Heart from '../assets/images/heart.png'
import Rabbit from '../assets/images/rabbit.png'
import Star from '../assets/images/star.png'
import { gameCtrl } from '../store/slices/game'
import { useAppDispatch } from '../hooks/redux'

const data = [
	{
		id: 'boat-1',
		src: Boat,
	},
	{
		id: 'butterfly-1',
		src: Butterfly,
	},
	{
		id: 'crab-1',
		src: Crab,
	},
	{
		id: 'frog-1',
		src: Frog,
	},
	{
		id: 'heart-1',
		src: Heart,
	},
	{
		id: 'rabbit-1',
		src: Rabbit,
	},
	{
		id: 'star-1',
		src: Star,
	},
	{
		id: 'duck-1',
		src: Duck,
	},
]

export default function IndexPage() {
	const dispatch = useAppDispatch()

	const handleGameStart = () => {
		dispatch(gameCtrl.setup(data))
	}

	return (
		<div>
			<h1>{SETTINGS.appName}</h1>
			<Link to={Nav.Game}>
				<Button uppercase radius='lg' onClick={handleGameStart}>
					New game
				</Button>
			</Link>
			<Link to={Nav.About}>
				<Button uppercase radius='lg'>
					About
				</Button>
			</Link>

			<footer>
				{SETTINGS.partialFooter}&nbsp;&copy; {new Date().getFullYear()}
			</footer>
		</div>
	)
}
