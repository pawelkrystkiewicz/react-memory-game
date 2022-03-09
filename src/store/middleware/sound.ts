import soundsMiddleware from 'redux-sounds'
import { SoundMap } from './sound-map'
import Click from '../../sound/ui/gui_click.wav'
import Close from '../../sound/ui/gui_close.wav'
import Complete from '../../sound/ui/gui_complete.wav'
import Error from '../../sound/ui/gui_error.wav'
import Level from '../../sound/ui/gui_level.wav'
import Open from '../../sound/ui/gui_open.wav'
import Quest from '../../sound/ui/gui_quest.wav'

export type SoundMetaPlay = { play: string }
export type SoundMetaStop = { stop: string }
export type SoundMeta = { sound: SoundMetaPlay | SoundMetaStop }

interface SoundSprites {
	[name: string]: [number, number]
}

interface SoundConfig {
	src: string[]
	volume?: number
	sprite?: SoundSprites
	onplay?: () => void
	onstop?: () => void
	onend?: () => void
}

interface SoundsMapping {
	[name: string]: string | SoundConfig
}

const soundsData: SoundsMapping = {
	[SoundMap.Click]: Click,
	[SoundMap.Complete]: Complete,
	[SoundMap.Error]: Error,
	[SoundMap.Level]: Level,
	[SoundMap.Open]: Open,
	[SoundMap.Quest]: Quest,
	[SoundMap.Close]: Close,
}

export default soundsMiddleware(soundsData)
