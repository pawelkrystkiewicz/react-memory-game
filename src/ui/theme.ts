import { MantineTheme } from '@mantine/core'
import { Theme } from '../models/system'
import colors from './colors'
import { hex2rgba } from '../utils/hex2rgba'
import media, { isMobile } from './media-queries'

export const MantineThemeConfig: Partial<MantineTheme> = {
	loader: 'oval',
	colorScheme: 'dark',
	primaryColor: 'gray',
	fontFamily: 'League Spartan',
	// headings: { fontFamily: 'Greycliff CF, sans-serif' },
}

export const EmotionTheme: Theme = {
	colors,
	media,
	f: {
		hex2rgba,
		isMobile,
	},
}
