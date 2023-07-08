// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	declare const Footer: typeof import("$lib/components/Footer.svelte").default
	declare const Navbar: typeof import("$lib/components/Navbar.svelte").default
	declare const Stars: typeof import("$lib/components/Stars.svelte").default
}

export {}
