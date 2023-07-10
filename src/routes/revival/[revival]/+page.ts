import { error } from "@sveltejs/kit"
import { load as loadParent } from "../../revivals/+page"

export async function load({ params }) {
	let data: any
	try {
		data = await import(`../../../../pages/revivals/${params.revival}.md`)
	} catch (e) {
		throw error(404, "Revival not found")
	}

	const revivals = await (await loadParent()).revivals

	// remove the current post from the list
	revivals.splice(
		revivals.findIndex(revival => revival.name == data.metadata.name),
		1,
	)

	return {
		...(data.metadata as {
			name: string
			date: Date
			clients: number[]
			rating: {
				website: number
				community: number
				clients: number
				overall: number
			}
			overview: string
		}),
		content: data.default,
		revivals,
	}
}
