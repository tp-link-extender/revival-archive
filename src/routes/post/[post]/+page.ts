import { error } from "@sveltejs/kit"
import { load as loadBlog } from "../../blog/+page"
import type { PostMetadata } from "$lib/types"

export async function load({ params }) {
	let data: {
		metadata: PostMetadata
		default: string
	}
	try {
		data = await import(`../../../../pages/blog/${params.post}.md`)
	} catch (e) {
		error(404, "Post not found")
		return
	}

	const { posts } = await loadBlog()

	return {
		...data.metadata,
		content: data.default,
		// remove the current post from the list
		posts: posts.toSpliced(
			posts.findIndex(post => post.title === data.metadata.title),
			1
		),
	}
}
