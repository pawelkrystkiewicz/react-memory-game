enum ErrorsEnum {
	PAGE_NOT_FOUND = 'PAGE_NOT_FOUND',
	SERVER_ERROR = 'SERVER_ERROR',
	UNKNOWN_ERROR = 'UNKNOWN_ERROR',
	NETWORK_ERROR = 'NETWORK_ERROR',
	FAILED_TO_FETCH = 'FAILED_TO_FETCH',
}

export const Errors = { ...ErrorsEnum }
export type ErrorsType = ErrorsEnum
