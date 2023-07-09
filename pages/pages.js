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

if (fs.existsSync("./pagesjson")) fs.rmSync("./pagesjson", { recursive: true })

allMdFiles.forEach(file => {
	let md = fs.readFileSync(file.name, "utf8")

	// Get json data from the top of the file
	const [json, content] = md
		.match(/^```json[\s\S]*({[\s\S]+})[\s\S]*```\n*([\s\S]+)$/)
		.slice(1, 3)

	const obj = {
		...JSON.parse(json),
		html: marked.parse(content, {
			mangle: false,
			headerIds: false,
		}),
	}

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
