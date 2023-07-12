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
		<article class="mb-4 flex p-3 ps-5">
			{#if review.logo}
				<img
					src="/logos/{review.logo}"
					class="logo my-a me-5 h-14"
					alt="{review.name} Logo" />
			{/if}
			<div>
				<h2 class="mb-2 mt-1">{review.name}</h2>
				<p class="my-2">
					{when(review.date)}
				</p>
			</div>
			<div class="mt-a ms-a flex">
				<span class="me-2">Rating:</span>
				<Stars rating={review.rating.overall} />
			</div>
		</article>
	</a>
{/each}

<style lang="stylus">
	a:hover
		transform translateY(-0.15rem)
</style>
