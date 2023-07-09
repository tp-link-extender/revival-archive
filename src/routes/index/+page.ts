export async function load() {
	const allPostFiles = import.meta.glob("../../../pagesjson/index/*.json")

	return {
		revivals: Promise.all(
			Object.entries(allPostFiles).map(async ([path, resolver]) => {
				const { name, date, clients, rating, overview } =
					(await resolver()) as any

				return {
					name,
					date,
					clients,
					rating,
					overview,
					path: path.match(/(\w+)\.json/)?.[1],
				}
			})
		),
	}
}
