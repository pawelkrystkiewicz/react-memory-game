
export const shuffleArray = <T = string>(input: Array<T>): Array<T> => {
	const shuffled = input.slice()
	for (let i = shuffled.length - 1; i > 0; i--) {
		const rand = Math.floor(Math.random() * (i + 1))
		;[shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]]
	}
	return shuffled
}
