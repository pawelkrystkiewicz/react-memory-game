import { MediaSize } from '../ui/media-queries'

export type GridSettings = {
	rows: number
	columns: number
}

export type Settings = {
	appName: string
	partialFooter: string
	backgroundImagePath: string
}

export type GameImage = { id: string; src: string }
export type GameDeck = GameImage[]

export interface StyledWithColor {
	color: string
}

export interface StyledWithTheme {
	theme?: Theme
}

export interface Colors {
	hothSnow: string
	spaceGrey: string
	imperialBlue: string
	jediBlue: string
	rebelGreen: string
	rebelOrange: string
	crawlYellow: string
}

export interface ThemeHelperFunctions {
	hex2rgba: (hex: string, opacity: number) => string
	isMobile: (width: number, size?: MediaSize) => boolean
}

export interface ThemeMediaQueries {
	mobile: string
	tablet: string
	laptop: string
	desktop: string
}

export interface Theme {
	colors: Colors
	f: ThemeHelperFunctions
	media: ThemeMediaQueries
}
