<script lang="ts">
	export let rating: number
</script>

{#each { length: 5 } as _, i}
	<span
		class="me-1.5 inline-block h-5 w-5"
		style="--rating: {Math.min(1, Math.min(5, rating - i)) * 100}%" />
{/each}

<style lang="stylus">
	span
		// Fill each star with a gradient based on the rating
		background linear-gradient(to right,
			#f1c40f var(--rating), #4f4d4c var(--rating))
		+lightTheme()
			background linear-gradient(to right,
				#f1c40f var(--rating), #bfbdbc var(--rating))

		// Apply a mask to hide the gradient outside the star
		-webkit-mask url(/star.svg) no-repeat
</style>
