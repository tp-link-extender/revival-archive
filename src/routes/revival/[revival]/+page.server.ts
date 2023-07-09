import { error } from "@sveltejs/kit"
import { load as loadParent } from "../../index/+page"

export async function load({ params }) {
	let name: string,
		date: Date,
		clients: number[],
		rating: number,
		html: string

	try {
		;({ name, date, clients, rating, html } = await import(
			`../../../../pagesjson/index/${params.revival}.json`
		))
	} catch (e) {
		throw error(404, "Revival not found")
	}

	const revivals = await (await loadParent()).revivals

	// remove the current post from the list
	const index = revivals.findIndex(revival => revival.name == name)
	revivals.splice(index, 1)

	return { name, date, clients, rating, html, revivals }
}
