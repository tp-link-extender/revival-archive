import { error } from "@sveltejs/kit"
import { load as loadParent } from "../../revivals/+page"
import type { RevivalMetadata } from "$lib/types"

export async function load({ params }) {
	let data: {
		metadata: RevivalMetadata
		default: string
	}
	try {
		data = await import(`../../../../pages/revivals/${params.revival}.md`)
	} catch (e) {
		error(404, "Revival not found")
		return
	}

	const { revivals } = await loadParent()

	// remove the current revival from the list

	return {
		...data.metadata,
		content: data.default,
		revivals: revivals
			.toSpliced(
				revivals.findIndex(
					revival => revival.name === data.metadata.name
				),
				1
			)
			// remove revivals that don't have a rating
			.filter(revival => revival.rating),
	}
}
