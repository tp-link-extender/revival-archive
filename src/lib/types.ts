export type RevivalMetadata = {
	name: string
	date: Date
	updated?: Date
	logo?: string
	website?: string
	defunct?: boolean
	clients: number[]
	rating?: {
		website: number
		community: number
		clients: number
		overall: number
	}
	overview: string
}

export type PostMetadata = {
	title: string
	date: Date
	updated?: Date
}
