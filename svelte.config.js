import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"
import autoImport from "sveltekit-autoimport"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [".svelte", ".svelte.md", ".md", ".svx"],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		autoImport({
			components: ["./src/lib/components"],
			flat: true,
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
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
}
