import type { RevivalMetadata } from "$lib/types"

const allPostFiles = import.meta.glob("../../../pages/revivals/*.md")

export const load = async () => ({
	revivals: await Promise.all(
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
})
