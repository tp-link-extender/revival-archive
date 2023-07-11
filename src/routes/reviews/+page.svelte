<script lang="ts">
	import when from "$lib/when"

	export let data
</script>

<svelte:head>
	<title>Reviews • Revival Archive</title>
</svelte:head>

<h1>Reviews</h1>

{#each data.reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as review}
	<a
		href="/revival/{review.path}"
		class="txt @light:text-dark hover:text-#ccc
		@light:hover:text-#555 bg-a rounded-3 durition-500 box-border
		block text-white transition hover:shadow-xl">
		<article class="mb-4 px-6 py-3">
			<h2 class="my-2">{review.name}</h2>
			<p class="my-2">
				{when(review.date)}
			</p>
		</article>
	</a>
{/each}

<style lang="sass">
	a:hover
		transform: translateY(-0.15rem)
</style>
