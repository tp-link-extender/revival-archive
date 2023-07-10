export default (date: Date) => {
	const d = new Date(date).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	})
	return d == "Invalid Date" ? "Not yet published" : `Published ${d}`
}
