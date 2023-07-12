<script lang="ts">
	import when from "$lib/when"
	import Stars from "$lib/components/Stars.svelte"

	export let data

	const ratingCategories: { [k: string]: number } = data.rating
</script>

<svelte:head>
	<meta name="description" content="{data.name}: {when(data.date)}" />
	<title>{data.name} • Revival Archive</title>
</svelte:head>

<div class="xl:max-w-300 flex flex-col xl:flex-row">
	<article class="w-180 pt-8">
		<div class="-ms-4 flex flex-col">
			{#if data.logo}
				<img
					src="/logos/{data.logo}"
					class="logo mx-a h-15 -mb-6"
					alt="{data.name} Logo" />
			{/if}
			<a href="/revivals" class="hover:text-#888 mt-a">← Back to Index</a>
			<div class="ms-4 mt-4">
				<span class="flex">
					<h1 class="text-2rem m-0">{data.name}</h1>
					<span class="mt-a ms-a mb-0.5">
						{when(data.date)}
						{#if data.updated}
							<br />
							<em>
								{when(data.updated, true)}
							</em>
						{/if}
					</span>
				</span>

				<hr class="mb-4 mt-3" />

				<div class="content pt-0.01 text-justify">
					<div class="mb-10">
						<svelte:component this={data.content} />
					</div>

					<h1>Rating</h1>

					<table>
						{#each Object.keys(ratingCategories) as category}
							<tr>
								<td
									class:pt-4={category == "overall"}
									class="pe-6">
									{category.charAt(0).toUpperCase() +
										category.slice(1)}
								</td>
								<div class:pt-4={category == "overall"}>
									<Stars
										rating={ratingCategories[category]} />
								</div>
							</tr>
						{/each}
					</table>
				</div>
			</div>
		</div>
	</article>

	{#if data.revivals.length > 0}
		<section class="w-120 xl:max-w-100 xl:ms-12 xl:mt-14">
			<h2>Other revivals</h2>
			{#each data.revivals as revival}
				<a
					href="/revival/{revival.path}"
					class="txt bg-a @light:text-dark hover:text-#ccc
					@light:hover:text-#555 rounded-3 durition-500 box-border
					block text-white transition hover:shadow-xl">
					<article class="mb-4 flex p-3 ps-5">
						{#if revival.logo}
							<img
								src="/logos/{revival.logo}"
								class="logo my-a me-5 h-14"
								alt="{revival.name} Logo" />
						{/if}
						<div>
							<h3 class="mb-2 mt-1">{revival.name}</h3>
							<small>
								{when(revival.date)}
							</small>
						</div>
					</article>
				</a>
			{/each}
		</section>
	{/if}
</div>

<style lang="stylus">
	section a:hover
		transform translateY(-0.15rem)
</style>
