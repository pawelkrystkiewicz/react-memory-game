export enum NavigationPathEnum {
	_404 = '/page-not-found',
	_500 = '/server-error',
	Home = '/',
	Game = '/game',
	About = '/about',
	SelectGame = '/select-game',
}

export const Nav = { ...NavigationPathEnum }
