import { GameDeck, GameImage } from '../models/system'

export const duplicateWithUniqueId = (images: GameDeck): GameDeck => {
	const secondPart = images.map(({ id, ...rest }: GameImage) => ({
		...rest,
		id: id.replace('1', '2'),
	}))

	return [...images, ...secondPart]
}
