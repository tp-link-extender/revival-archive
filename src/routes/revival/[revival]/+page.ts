import { error } from "@sveltejs/kit"
import { load as loadParent } from "../../revivals/+page"
import type { RevivalMetadata } from "$lib/types"

export async function load({ params }) {
	let data: any
	try {
		data = await import(`../../../../pages/revivals/${params.revival}.md`)
	} catch (e) {
		throw error(404, "Revival not found")
	}

	let revivals = await (await loadParent()).revivals

	// remove the current revival from the list
	revivals.splice(
		revivals.findIndex(revival => revival.name == data.metadata.name),
		1
	)

	// remove revivals that don't have a rating
	revivals = revivals.filter(revival => revival.rating)

	return {
		...(data.metadata as RevivalMetadata),
		content: data.default,
		revivals,
	}
}
