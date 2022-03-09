import { removeLast2Characters } from './remove-id'

export const compareSelected = (selected: string[]): boolean => {
	const [id1, id2] = selected
	const cardName1 = removeLast2Characters(id1)
	const cardName2 = removeLast2Characters(id2)

	return cardName1 === cardName2
}
