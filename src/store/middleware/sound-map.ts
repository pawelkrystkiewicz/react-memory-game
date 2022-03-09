export enum SoundMapEnum {
	Click = 'GUI_CLICK',
	Complete = 'GUI_COMPLETE',
	Error = 'GUI_ERROR',
	Level = 'GUI_LEVEL',
	Open = 'GUI_OPEN',
	Quest = 'GUI_QUEST',
	Close = 'GUI_CLOSE',
}
export const SoundMap = { ...SoundMapEnum }
export type SoundMap = SoundMapEnum
