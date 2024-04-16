export default (date: Date, updated = false) => {
	const Text = updated ? "Updated" : "Published"
	const text = updated ? "updated" : "published"

	const d = new Date(date).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	})
	return d === "Invalid Date" ? `Not yet ${text}` : `${Text} ${d}`
}
