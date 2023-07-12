import type { RevivalMetadata } from "$lib/types"

export async function load() {
	const allPostFiles = import.meta.glob("../../../pages/revivals/*.md")

	return {
		revivals: Promise.all(
			Object.keys(allPostFiles).map(async path => {
				const { metadata } = (await allPostFiles[path]()) as any

				return {
					...(metadata as RevivalMetadata),
					path: path.match(/(\w+)\.md/)?.[1],
				}
			})
		),
	}
}
