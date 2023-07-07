import { error } from "@sveltejs/kit"

export async function load({ params }) {
	try {
		const { title, date, html } = await import(
			`../../../../pagesjson/blog/${params.page}.json`
		)
		return {
			html,
			title,
			date,
		}
	} catch (e) {
		throw error(404, "Post not found")
	}
}
