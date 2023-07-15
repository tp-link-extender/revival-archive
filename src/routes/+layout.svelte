<script lang="ts">
	import { navigating } from "$app/stores"
	import nprogress from "nprogress"

	import "/src/nprogress.styl"
	import "/src/global.styl"
	import "uno.css"

	// Settings for nprogress, the loading bar shown
	// at the top of the page when navigating
	nprogress.configure({ showSpinner: false })

	let timeout: number | undefined
	// 100ms is the minimum time the loading bar will be shown
	$: if ($navigating && !timeout) timeout = setTimeout(nprogress.start, 100)
	else {
		clearTimeout(timeout)
		timeout = undefined

		nprogress.done()
	}
</script>

<div class="flex flex-col lg:flex-row">
	<Navbar />

	<div class="flex h-screen w-full flex-col">
		<main
			class="pt-18 sm:mx-a sm:w-155 md:w-190 lg:w-170 xl:w-230 2xl:w-280
			box-border pe-2.5 ps-5 sm:pt-24 lg:pt-12">
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style lang="stylus">
	div div
		background-size 2rem 2rem
		background-position 1rem 1rem

		background-image linear-gradient(90deg, #191716 1px, transparent 1px), 
			linear-gradient(0deg, #191716 1px, transparent 1px)

		+lightTheme()
			background-image linear-gradient(90deg, #f9f7f6 1px, transparent 1px),
				linear-gradient(0deg, #f9f7f6 1px, transparent 1px)

		+lg()
			overflow-y scroll
</style>
