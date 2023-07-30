import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import autoImport from "sveltekit-autoimport"
import { mdsvex } from "mdsvex"

export default {
	extensions: [".svelte", ".svelte.md", ".md", ".svx"],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			stylus: {
				prependData: '@import "src/variables.styl"',
			},
		}),
		autoImport({
			components: ["./src/lib/components"],
			mapping: {
				fade: 'import fade from "$lib/fade"',
			},
      		include: ["**/*.svelte", "**/*.md", "**/*.svx"],
		}),
		mdsvex({
			extensions: [".svelte.md", ".md", ".svx"],

			smartypants: {
				dashes: "oldschool",
			},

			remarkPlugins: [],
			rehypePlugins: [],
		}),
	],

	kit: {
		adapter: adapter(),
	},

	vitePlugin: {
		inspector: {
			toggleKeyCombo: "control-i",
		},
	},
}
