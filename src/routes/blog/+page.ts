import type { PostMetadata } from "$lib/types"

export async function load() {
	const allPostFiles = import.meta.glob("../../../pages/blog/*.md")

	return {
		posts: Promise.all(
			Object.keys(allPostFiles).map(async path => {
				const { metadata } = (await allPostFiles[path]()) as any

				return {
					...(metadata as PostMetadata),
					path: path.match(/(\w+)\.md/)?.[1],
				}
			})
		),
	}
}
