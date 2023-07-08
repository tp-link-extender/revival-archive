<script lang="ts">
	export let rating: number
</script>

{#each { length: 5 } as _, i}
	<div
		class="w-5 h-5 me-1.5 inline-block"
		style="--rating: {Math.min(1, Math.min(5, rating - i)) * 100}%" />
{/each}

<style lang="sass">
	div
		// Fill each star with a gradient based on the rating
		background: linear-gradient( to right, #f1c40f var(--rating), #f1c40f var(--rating), #7f7d7c var(--rating), #7f7d7c var(--rating), #7f7d7c)

		// APply a mask to hide the gradient outside the star
		-webkit-mask: url(/star.svg) no-repeat
</style>
