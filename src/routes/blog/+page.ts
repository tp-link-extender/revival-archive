export async function load() {
	const allPostFiles = import.meta.glob("../../../pages/blog/*.md")

	return {
		posts: Promise.all(
			Object.keys(allPostFiles).map(async path => {
				const { metadata } = await allPostFiles[path]()

				return {
					...(metadata as {
						title: string
						date: Date
					}),
					path: path.match(/(\w+)\.md/)?.[1],
				}
			}),
		),
	}
}
