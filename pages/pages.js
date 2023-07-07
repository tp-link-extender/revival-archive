import { marked } from "marked"
import fs from "fs"

// Convert all markdown files in the pages directory and all subdirectories
// to HTML, and output as JSON files in the pagesjson directory.

function walk(dir) {
	let results = []

	for (const file of fs.readdirSync(dir)) {
		const name = `${dir}/${file}`
		const stat = fs.statSync(name)

		if (stat && stat.isDirectory())
			// Recurse into a subdirectory
			results = results.concat(walk(name))
		else if (file.endsWith(".md"))
			// Is a file
			results.push({ name })
	}
	return results
}

const allMdFiles = walk("./pages")

fs.rmSync("./pagesjson", { recursive: true })

allMdFiles.forEach(file => {
	let md = fs.readFileSync(file.name, "utf8")

	const lines = md.split("\n")

	// Remove the first line of the file
	const title = lines.shift()
	const date = new Date(lines.shift())
	lines.shift() // Remove the empty line

	md = lines.join("\n")

	const html = marked.parse(md, {
		mangle: false,
		headerIds: false,
	})

	const obj = { title, date, html }

	fs.mkdirSync(
		file.name
			.replace("/pages/", "/pagesjson/")
			.replace(file.name.split("/").pop(), ""),
		{ recursive: true }
	)

	console.log(`Writing ${file.name.replace(".md", ".json")}`)

	fs.writeFileSync(
		file.name.replace("/pages/", "/pagesjson/").replace(".md", ".json"),
		JSON.stringify(obj)
	)
})

console.log("~ Done! ~")
