import { error } from "@sveltejs/kit"
import { load as loadBlog } from "../../blog/+page"

export async function load({ params }) {
	let data: any
	try {
		data = await import(`../../../../pages/blog/${params.post}.md`)
	} catch (e) {
		throw error(404, "Post not found")
	}

	const posts = await (await loadBlog()).posts

	// remove the current post from the list
	posts.splice(
		posts.findIndex(post => post.title == data.metadata.title),
		1,
	)

	return {
		...(data.metadata as {
			title: string
			date: Date
		}),
		content: data.default,
		posts,
	}
}
