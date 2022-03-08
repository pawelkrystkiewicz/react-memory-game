export enum NavigationPathEnum {
	_404 = '/page-not-found',
	_500 = '/server-error',
	Home = '/',
	Game = '/game',
	About = '/about',
}

export const Nav = { ...NavigationPathEnum }
