import type { PostMetadata } from "$lib/types"

const allPostFiles = import.meta.glob("../../../pages/blog/*.md")
export const load = async () => ({
	posts: await Promise.all(
		Object.keys(allPostFiles).map(async path => {
			const { metadata } = (await allPostFiles[path]()) as {
				metadata: PostMetadata
			}

			return {
				...metadata,
				path: path.match(/(\w+)\.md/)?.[1],
			}
		})
	),
})
