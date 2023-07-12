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

	const revivals = await (await loadParent()).revivals

	// remove the current post from the list
	revivals.splice(
		revivals.findIndex(revival => revival.name == data.metadata.name),
		1
	)

	return {
		...(data.metadata as RevivalMetadata),
		content: data.default,
		revivals,
	}
}
