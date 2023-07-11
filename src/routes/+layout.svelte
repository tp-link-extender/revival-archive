<script lang="ts">
	import { navigating } from "$app/stores"
	import nprogress from "nprogress"

	import "/src/nprogress.sass"
	import "/src/global.sass"
	import "uno.css"

	// Settings for nprogress, the loading bar shown
	// at the top of the page when navigating
	nprogress.configure({ showSpinner: false })

	let timeout: any
	// 100ms is the minimum time the loading bar will be shown
	$: if ($navigating && !timeout) timeout = setTimeout(nprogress.start, 100)
	else {
		clearTimeout(timeout)
		timeout = null

		nprogress.done()
	}
</script>

<div class="flex flex-col lg:flex-row">
	<Navbar />

	<div class="oveflow-scroll flex h-screen w-full flex-col">
		<main
			class="pt-18 sm:mx-a sm:w-155 md:w-190 lg:w-170 xl:w-230 2xl:w-280
			box-border pe-2.5 ps-5 sm:pt-24 lg:pt-12">
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style lang="sass">
	@media screen and (min-width: 1024px)
		div div
			overflow-y: scroll
</style>
