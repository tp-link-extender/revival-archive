<script lang="ts">
	import "/src/global.sass"
	import "uno.css"
</script>

<div class="flex flex-col lg:flex-row">
	<Navbar />

	<div class="flex flex-col w-full h-screen oveflow-scroll">
		<main
			class="box-border ps-5 pe-2.5 pt-18 sm:pt-24 lg:pt-12 sm:mx-a
			sm:w-155 md:w-190 lg:w-170 xl:w-230 2xl:w-280">
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
