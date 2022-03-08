import { ThemeMediaQueries } from '../models/system'

export enum MediaSize {
	MOBILE = 425,
	TABLET = 768,
	LAPTOP = 1024,
	DESKTOP = 1440,
}

export const isMobile = (width: number, size = MediaSize.TABLET): boolean =>
	width <= size

const mediaQueries: ThemeMediaQueries = {
	mobile: `@media (min-width: ${MediaSize.MOBILE}px)`,
	tablet: `@media (min-width: ${MediaSize.TABLET}px)`,
	laptop: `@media (min-width: ${MediaSize.LAPTOP}px)`,
	desktop: `@media (min-width: ${MediaSize.DESKTOP}px)`,
}

export default mediaQueries
