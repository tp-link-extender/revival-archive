import { marked } from "marked"
import fs from "fs"

// Convert all markdown files in the pages directory and all subdirectories
// to HTML, and output as JSON files in the pagesjson directory.

const parseMD = md =>
	marked.parse(md, {
		mangle: false,
		headerIds: false,
	})

// thx copilot
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
	let md = fs.readFileSync(file.name, "utf8").replace(/\r\n/g, "\n")

	// Get json data from the top of the file
	const [json, content] = md
		.match(/^```json[\s\S]*({[\s\S]+})[\s\S]*```\n*([\s\S]+)$/)
		.slice(1, 3)

	let obj

	if (file.name.includes("/index/")) {
		// It's a Revival description
		try {
			const [overview, post] = content.split("\n---\n")
			obj = {
				...JSON.parse(json),
				overview: parseMD(overview),
				html: parseMD(post),
			}
		} catch (e) {
			throw new Error(
				`Error parsing ${file.name}: check that it has an overview and post section separated by ---`
			)
		}
	} else
		obj = {
			...JSON.parse(json),
			html: parseMD(content),
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
