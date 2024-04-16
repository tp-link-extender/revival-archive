import type { RevivalMetadata } from "$lib/types"

export async function load() {
	const allPostFiles = import.meta.glob("../../../pages/revivals/*.md")

	return {
		reviews: Promise.all(
			Object.keys(allPostFiles).map(async path => {
				const { metadata } = (await allPostFiles[path]()) as {
					metadata: RevivalMetadata
				}

				return {
					...metadata,
					path: path.match(/(\w+)\.md/)?.[1],
				}
			})
		),
	}
}
