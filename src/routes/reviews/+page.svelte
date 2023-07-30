<script lang="ts">
	import when from "$lib/when"

	export let data

	const reviews = data.reviews
		// Filter only revivals with reviews and ratings
		.filter(revival => revival.rating)
		// Sort by non-defunct revivals first, then by rating
		.sort((a, b) => (a.defunct ? 1 : 0) - (b.defunct ? 1 : 0))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
</script>

<svelte:head>
	<title>Reviews • Revival Archive</title>
</svelte:head>

<h1>Reviews</h1>

{#each reviews as review, num}
	<a
		in:fade|global={{ num, total: reviews.length }}
		href="/revival/{review.path}"
		class="txt @light:text-dark hover:text-#ccc
		@light:hover:text-#555 bg-a rounded-3 box-border
		block text-white transition hover:shadow-xl">
		<article class:opacity-50={review.defunct} class="mb-4 flex p-3 ps-5">
			{#if review.logo}
				<img
					src="/logos/{review.logo}"
					class="logo my-a me-5 h-14"
					alt="{review.name} Logo" />
			{/if}
			<div>
				<div class="flex flex-wrap">
					<h2 class="mb-0 me-3 mt-1">{review.name}</h2>
					{#if review.defunct}
						<p class="mb-a mt-0 text-sm text-red-500">[defunct]</p>
					{/if}
				</div>
				<p class="my-2">
					{when(review.date)}
				</p>
			</div>
			{#if review.rating}
				<div class="mt-a ms-a flex">
					<span class="me-2">Rating:</span>
					<Stars rating={review.rating.overall} />
				</div>
			{/if}
		</article>
	</a>
{/each}

{#if reviews.length == 0}
	<h2 class="font-300 mt-35vh text-center tracking-wide">
		No reviews yet. Watch this space!
	</h2>
{/if}

<style lang="stylus">
	a:hover
		transform translateY(-0.15rem)
</style>
