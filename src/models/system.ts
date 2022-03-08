export type GridSettings = {
	rows: number
	columns: number
}

export type Settings = {
	appName: string
	footer: string
	defaultGridSize: GridSettings
}

export type GameImage = { id: string; src: string }
export type GameDeck = GameImage[]
