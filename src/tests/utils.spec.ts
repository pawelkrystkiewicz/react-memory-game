import 'jest'
import { duplicateWithUniqueId } from '../utils/duplicate-array'
import { getSrcByImageId } from '../utils/get-src-by-image-id'
import { hex2rgba } from '../utils/hex2rgba'
import { removeLast2Characters } from '../utils/remove-id'
import { shuffleArray } from '../utils/shuffle-array'

describe('utils functions', () => {
	describe('duplicate arrays', () =>
		[
			{
				description:
					'should double the elements in array and swap "1" for "2" in [id]',
				input: [{ id: '1' }],
				expected: [{ id: '1' }, { id: '2' }],
			},
		].forEach(({ description, input, expected }) =>
			it(description, () => {
				const result = duplicateWithUniqueId(input as any)
				expect(result).toHaveLength(input.length * 2)
				expect(result).toStrictEqual(expected)
			})
		))

	describe('getSrcByImageId', () =>
		[
			{
				description: 'should retrieve image src from provided set by [id]',
				input: {
					id: '99',
					deck: [
						{ id: '1', src: 'for1' },
						{ id: '99', src: 'for99' },
					],
				},
				expected: 'for99',
			},
			{
				description: 'should return undefined on image not found',
				input: {
					id: '99',
					deck: [{ id: '1', src: 'for1' }],
				},
				expected: undefined,
			},
		].forEach(({ description, input, expected }) =>
			it(description, () => {
				const result = getSrcByImageId(input.id, input.deck)
				expect(result).toStrictEqual(expected)
			})
		))

	describe('hex2rgba', () =>
		[
			{
				description: 'should change hex color into rgba with [opacity=100%]',
				input: { hex: '#ffffff', opacity: 100 },
				expected: 'rgba(255,255,255,1)',
			},
			{
				description: 'should change hex color into rgba with [opacity=50%]',
				input: { hex: '#ffffff', opacity: 50 },
				expected: 'rgba(255,255,255,0.5)',
			},
			{
				description: 'should change hex color into rgba with [opacity=0%]',
				input: { hex: '#ffffff', opacity: 0 },
				expected: 'rgba(255,255,255,0)',
			},
		].forEach(({ description, input, expected }) =>
			it(description, () => {
				const result = hex2rgba(input.hex, input.opacity)
				expect(result).toStrictEqual(expected)
			})
		))
	describe('removeLast2Characters', () =>
		[
			{
				description: 'should remove from string last 2 characters',
				input: 'POLAND',
				expected: 'POLA',
			},
			{
				description: 'should handle empty string',
				input: '',
				expected: '',
			},
		].forEach(({ description, input, expected }) =>
			it(description, () => {
				const result = removeLast2Characters(input)
				expect(result).toStrictEqual(expected)
			})
		))
	describe('shuffleArray', () =>
		[
			{
				description: 'should mix up order of elements in array',
				input: [1, 2, 3, 1, 2, 3],
			},
		].forEach(({ description, input }) =>
			it(description, () => {
				const result = shuffleArray(input)
				expect(result).toHaveLength(input.length)
				expect(result).not.toStrictEqual(input)
				expect(result).toEqual(expect.arrayContaining(input))
			})
		))
})
