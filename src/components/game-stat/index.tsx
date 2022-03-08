import { GameStatStyled } from './styled'

interface GameStatProps {
	title: string
	value: string | number
	color?: string
}

const GameStat: React.FC<GameStatProps> = ({
	title,
	value,
	color,
}: GameStatProps) => (
	<GameStatStyled color={color}>
		{title}&nbsp;<span>{value}</span>
	</GameStatStyled>
)

export default GameStat
