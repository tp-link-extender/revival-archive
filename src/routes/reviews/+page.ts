export async function load() {
	const allPostFiles = import.meta.glob("../../../pages/revivals/*.md")

	return {
		reviews: Promise.all(
			Object.keys(allPostFiles).map(async path => {
				const { metadata } = (await allPostFiles[path]()) as any

				return {
					...(metadata as {
						name: string
						date: Date
						clients: number[]
						rating: {
							website: number
							community: number
							clients: number
							overall: number
						}
						overview: string
					}),
					path: path.match(/(\w+)\.md/)?.[1],
				}
			})
		),
	}
}
