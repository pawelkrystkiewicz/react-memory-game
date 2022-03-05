export type QrRawBytes = {
	[key: string]: number
}
export type QrResultPoints = {
	x: number
	y: number
	estimatedModuleSize: number
	count: number
}
export interface QrResult {
	text: string
	rawBytes: QrRawBytes
	numBits: number
	resultPoints: QrResultPoints[]
	format: number
	timestamp: number
	resultMetadata: unknown
}
