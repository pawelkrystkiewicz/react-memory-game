import { GameDeck, GameImage } from '../models/system'

export const duplicateWithUniqueId = (images: GameDeck): GameDeck => {
	const secondPart = images.map(({ id, src }: GameImage) => ({
		id: id.replace('1', '2'),
		src,
	}))

	return [...images, ...secondPart]
}
