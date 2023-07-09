export async function load() {
	const allPostFiles = import.meta.glob("../../../pagesjson/blog/*.json")

	return {
		posts: Promise.all(
			Object.entries(allPostFiles).map(async ([path, resolver]) => {
				const { title, date } = (await resolver()) as any

				return {
					title,
					date,
					path: path.match(/(\w+)\.json/)?.[1],
				}
			})
		),
	}
}
