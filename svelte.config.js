import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/kit/vite"
import autoImport from "sveltekit-autoimport"

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		autoImport({
			components: ["./src/lib/components"],
			flat: true,
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
}
