import { error } from "@sveltejs/kit"
import { load as loadParent } from "../+page"

export async function load({ params }) {
	let title: string, date: Date, html: string

	try {
		;({ title, date, html } = await import(
			`../../../../pagesjson/blog/${params.post}.json`
		))
	} catch (e) {
		throw error(404, "Post not found")
	}

	const posts = await (await loadParent()).posts

	// remove the current post from the list
	const index = posts.findIndex(post => post.title == title)
	posts.splice(index, 1)

	return { title, date, html, posts }
}
