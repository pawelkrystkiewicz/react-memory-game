import soundsMiddleware from 'redux-sounds'
import { SoundMap } from './sound-map'

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
	// [SoundMap.Error1]: Error1,
	// [SoundMap.Error2]: Error2,
	// [SoundMap.Error3]: Error3,
	// [SoundMap.SuccessSound]: SuccessSound,
	// [SoundMap.UILock]: UILock,
	// [SoundMap.UIUnlock]: UIUnlock,
	// [SoundMap.UITap1]: UITap1,
	// [SoundMap.UITap2]: UITap2,
	// [SoundMap.UITap3]: UITap3,
	// [SoundMap.UITap4]: UITap4,
	// [SoundMap.UICameraShutter]: UICameraShutter,
	// [SoundMap.StateChangeConfirmUp]: StateChangeConfirmUp,
	// [SoundMap.StateChangeConfirmDown]: StateChangeConfirmDown,
	// [SoundMap.NavigationHoverTap]: NavigationHoverTap,
	// [SoundMap.NavigationSelectionCompleteCelebration]:
	//   NavigationSelectionCompleteCelebration,
	// [SoundMap.NavigationForwardSelectionMinimal]:
	//   NavigationForwardSelectionMinimal,
	// [SoundMap.NavigationBackwardSelectionMinimal]:
	//   NavigationBackwardSelectionMinimal,
	// [SoundMap.NavigationForwardSelection]: NavigationForwardSelection,
	// [SoundMap.NavigationBackwardSelection]: NavigationBackwardSelection,
	// [SoundMap.NavTransitionLeft]: NavTransitionLeft,
	// [SoundMap.NavTransitionRight]: NavTransitionRight,
	// [SoundMap.NavInvalidSelection]: NavInvalidSelection,
	// [SoundMap.NavCancel]: NavCancel,
	// [SoundMap.UILoading]: UILoading,
	// [SoundMap.UIRefresh]: UIRefresh,
}

export default soundsMiddleware(soundsData)
