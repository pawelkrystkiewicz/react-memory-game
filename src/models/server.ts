export type EntityCommonFields = {
	color: string
	isActive: boolean
	createdAt: Date
	updatedAt: Date
}
export type EntityCommonFieldsAndEmployee = {
	responsibleEmployee: Employee
} & EntityCommonFields

export enum EmployeeType {
	EMPLOYEE = 'EMPLOYEE',
	MANAGER = 'MANAGER',
	SUPPORT = 'SUPPORT',
}

export type Employee = Omit<EntityCommonFields, 'color'> & {
	firstName: string
	lastName: string
	referenceNumber: string
	email: string
	phone: string
	commune: string
	city: string
	employeeUUID: string
	employeeType: EmployeeType
	rate: number
	isAPT: boolean
	language: string
	location: Location[]
	postalCode: string
	phoneNumber: string
	numberPIN: string
	notes: string
	street: string
	workplace: Workplace
	department: Department
	competences: Competence[]
	contractor: Contractor
	user: User
	birthDate: Date
	idCardNumber: string
	portalPassword?: string
	agreements: Agreement[]
	agreementLast: Agreement
	responsibleEmployee: Employee
	disability: boolean
	disabilityLevel: DisabilityLevel
	/* extra fields not on backend */
	avatar?: string
}

export type EmployeeShort = Pick<
	Employee,
	'employeeUUID' | 'firstName' | 'lastName' | 'avatar'
>

export type AuthResponse = {
	employeeUUID: string
	employeeType: EmployeeType
	email: string
	firstName: string
	lastName: string
	isActive: boolean
	createdAt: Date
	updatedAt: Date
	contractorUUID: string
	contractorShortName: string
	// passwordPortal: string
}

export enum DisabilityLevel {
	NONE = 'NONE',
	HIGH = 'HIGH',
	MODERN = 'MODERN',
	SLIGHT = 'SLIGHT',
}

export type User = Omit<EntityCommonFields, 'color'> & {
	userUUID: string
	employee: Employee
}

export type Department = EntityCommonFieldsAndEmployee & {
	departmentShortName: string
	departmentFullName: string
	departmentUUID: string
}

export enum DeviceType {
	OUTDOOR = 'OUTDOOR',
	INDOOR = 'INDOOR',
}

export enum EventType {
	OUTDOOR = 'OUTDOOR',
	INDOOR = 'INDOOR',
}

export type Device = Omit<EntityCommonFields, 'color'> & {
	deviceUUID: string
	deviceName: string
	description: string
	deviceType: DeviceType
	eventRegister: EventRegister[]
	deviceId: string
	contractor: Contractor
	lastSeenAt?: Date
}

export type Event = EntityCommonFields & {
	eventShortName: string
	eventFullName?: string
	priority: number
	isWorkTime: boolean
	isBreak: boolean
	greetingText: string
	eventUUID: string
	eventType: EventType
	eventRegister: EventRegister[]
	eventPaired: Event
}

export type Contractor = Omit<EntityCommonFields, 'color'> & {
	contractorUUID: string
	contractorShortName: string
	contractorFullName: string
	city: string
	commune: string
	country: string
	devices: Device[]
	employees: Employee[]
	street: string
	postalCode: string
	numberNIP: number
	isAPT: boolean
	isOwner: boolean
}

export type Competence = EntityCommonFields & {
	competenceShortName: string
	competenceUUID: string
	competenceFullName: string
}
export enum AgreementType {
	CONTRACT = 'CONTRACT',
	PERMANENT = 'PERMANENT',
	TEMPORARY = 'TEMPORARY',
	FOREIGNER = 'FOREIGNER',
	INTERNSHIP = 'INTERNSHIP',
	OUTSOURCING = 'OUTSOURCING',
	PERMAMENT_WITH_TASK_MODE = 'PERMAMENT_WITH_TASK_MODE',
	TEMPORARY_WITH_TASK_MODE = 'TEMPORARY_WITH_TASK_MODE',
	TRIAL = 'TRIAL',
}

export type Currency = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	currencyFullName: string
	currencyShortName: string
	currencyUUID: string
}

export enum RateType {
	HOUR = 'HOUR',
	MONTH = 'MONTH',
}

export type Agreement = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	agreementUUID: string
	agreementShortName: string
	agreementFullName: string
	agreementType: AgreementType
	workTimeRules: number
	rate: number
	rateCurrency: Currency
	rateType: RateType
	responsibleEmployee: Employee
	workplace: Workplace
	department: Department
	start: Date
	end: Date
	billingPeriod: BillingPeriodType
	maximumWorkHourDay: number
	minimumWorkHourDay: number
	locations: Location[]
}

export type Location = EntityCommonFieldsAndEmployee & {
	locationShortName: string
	locationFullName: string
	locationUUID: string
}

export type Workplace = EntityCommonFieldsAndEmployee & {
	workplaceShortName: string
	workplaceUUID: string
	workplaceFullName: string
}

export type EventRegister = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	device: Device
	employee: Employee
	originRegisteredAt: Date
	eventRegisteredAt: Date
	eventRegisterUUID: string
	suggestedEvent: Event
	originEvent: Event
	event: Event
}
export type VacationLimit = Omit<EntityCommonFields, 'color'> & {
	vacationLimitUUID: string
	vacationLimitShortName: string
	vacationLimitFullName: string
	vacationLimitMax: number
	vacationLimitDefault: boolean
}

export type VacationLimitEmployee = Omit<
	EntityCommonFields,
	'color' | 'isActive'
> & {
	hoursPreviousYear: number
	hoursCurrentYear: number
	employeeVacationLimitUUID: string
	employee: Employee
}

export type Note = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	title: string
	notationUUID: string
	notationType: NoteType
	description: string
	author: Employee
	employee: Employee
}

export enum NoteType {
	CONFIDENTIAL = 'CONFIDENTIAL',
	NORMAL = 'NORMAL',
}

export type Equipment = {
	description: string
	returnedAt: Date
	equipmentUUID: string
	equipmentNumber: string
	employee: Employee
	transferedAt: Date
	transferedBy: Employee
}

export type Examination = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	examinationUUID: string
	examinationType: ExaminationType
	description: string
	request: RequestWFM
	employee: Employee
	completedAt: Date
	expiresAt: Date
}
export enum ExaminationType {
	MEDICAL = 'MEDICAL',
	OHS = 'OHS',
	PERIODIC = 'PERIODIC',
	SPECIALIZED = 'SPECIALIZED',
}

export type RequestWFM = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	requestUUID: string
	workHoursCount: number
	workDaysCount: number
	start: Date
	replacement: Employee
	requestType: RequestType
	referralType: ReferralType
	examination: Examination
	end: Date
	comment: string
	author: Employee
	employee: Employee
	absence?: Absence
	absenceType: AbsenceType
	status: RequestStatusType
	responsibleEmployee: Employee
}

export enum ReferralType {
	CONTROL = 'CONTROL',
	INITIAL = 'INITIAL',
	PERIODIC = 'PERIODIC',
}
export enum RequestType {
	REFERRAL = 'REFERRAL',
	VACATION = 'VACATION',
}
export enum RequestStatusType {
	APPROVED = 'APPROVED',
	REGISTERED = 'REGISTERED',
	REJECTED = 'REJECTED',
}
export enum BillingPeriodType {
	FOURMONTHS = 'FOURMONTHS',
	HALFYEAR = 'HALFYEAR',
	ONEMONTH = 'ONEMONTH',
	QUARTER = 'QUARTER',
	TWOMONTHS = 'TWOMONTHS',
	YEAR = 'YEAR',
}

export type Absence = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	absenceUUID: string
	toDate: Date
	fromDate: Date
	description: string
	absenceType: AbsenceType
	employee: Employee
}

export type AbsenceType = Omit<EntityCommonFields, 'color'> & {
	absenceTypeUUID: string
	shortName: string
	fullName: string
	description: string
}

export type EventShort = {
	fullName: string
	shortName: string
	color?: string
	eventRegisteredAt: Date
}

export type EventRegisterSummary = {
	break: number
	breakNoneWorkTime: number
	noneWorkTime: number
	workTime: number
}

export type EventRegisterView = {
	employeeUUID: string
	firstName: string
	lastName: string
	eventsRegistered: Event[]
	summary: EventRegisterSummary[]
	firstEventRegister: [{ eventRegisteredAt: number }]
	lastEventRegister: [{ eventRegisteredAt: number }]
}
export type EventRegisterShort = {
	color: string
	eventFullName: string | SyntheticEvent
	eventShortName: string | SyntheticEvent
	eventRegisteredAtFrom: Date
	eventRegisteredAtTo: Date
	lengthInSeconds: number
}

export enum SyntheticEvent {
	NoneWorkTime = 'NoneWorkTime',
	WorkTime = 'WorkTime',
	BreakNoneWorkTime = 'BreakNoneWorkTime',
	BreakTime = 'BreakTime',
}

export type OwnerSettings = Omit<EntityCommonFields, 'color' | 'isActive'> & {
	ownerSettingUUID: string
	colorWorkTime?: string
	colorNoneWorkTime?: string
	colorBreakNoneWorkTime?: string
	colorBreak?: string
	endWorkEvent: Event | null
	startWorkEvent: Event | null
}
