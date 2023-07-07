<script lang="ts">
	import "/src/global.sass"
	import "uno.css"
</script>

<div class="flex flex-col h-screen">
	<Navbar />

	<main
		class="box-border px-5 pt-12 sm:mx-auto w-full
		sm:w-140 md:w-180 lg:w-220 xl:w-270 2xl:w-300">
		<slot />
	</main>

	<Footer />
</div>
