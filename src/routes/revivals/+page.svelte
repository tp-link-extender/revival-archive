<script lang="ts">
	const years: { [k: number]: string } = {
		2007: "bg-amber-300 text-black",
		2008: "bg-fuchsia-500 text-black",
		2009: "bg-rose-400 text-black",
		2010: "bg-red-600",
		2011: "bg-orange-500 text-black",
		2012: "bg-yellow-500 text-black",
		2013: "bg-lime-500 text-black",
		2014: "bg-emerald-600 text-black",
		2015: "bg-cyan-600 text-black",
		2016: "bg-blue-600",
		2017: "bg-indigo-600",
		2018: "bg-violet-400 text-black",
		2019: "bg-purple-600",
		2020: "bg-slate-600"
	}

	export let data

	const revivals = data.revivals
		// Sort by non-defunct revivals first, then by rating
		.sort((a, b) => (a.defunct ? 1 : 0) - (b.defunct ? 1 : 0))
		.sort((a, b) => (b?.rating?.overall || 0) - (a?.rating?.overall || 0))
</script>

<svelte:head>
	<meta
		name="description"
		content="An index of many of the currently playable revivals." />
	<title>Revival Index • Revival Archive</title>
</svelte:head>

<h1>Revival Index</h1>

{#if revivals.length > 0}
	<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each revivals as revival, num}
			<div
				in:fade|global={{ num, total: revivals.length }}
				class="txt bg-#1f1c1d @light:bg-white rounded-2 @light:text-black card box-border flex flex-col p-5 text-white transition hover:shadow-xl">
				<div class:opacity-50={revival.defunct} class="flex">
					<div>
						<div class="flex flex-wrap">
							{#if revival.website}
								<h2 class="m-0 mb-1 me-3 flex">
									<a
										href={revival.website}
										target="_blank"
										class="txt">
										{revival.name}
									</a>
									<img
										src="/outlink.svg"
										alt="Links to an external site"
										class="@light:invert ms-1.5 h-3" />
								</h2>
							{:else}
								<h2 class="m-0 mb-1 me-3">{revival.name}</h2>
							{/if}
							{#if revival.defunct}
								<p class="mb-a mt-0 text-sm text-red-500">
									[defunct]
								</p>
							{/if}
						</div>
						<div class="flex flex-wrap text-white">
							{#each revival.clients || [] as year}
								<span
									class="{years[
										year
									]} my-1 me-2 rounded-full px-2 py-0.5 text-sm">
									{year}
								</span>
							{/each}
						</div>
					</div>

					{#if revival.logo}
						<img
							src="/logos/{revival.logo}"
							class="logo my-a ms-a h-14"
							alt="{revival.name} Logo" />
					{/if}
				</div>

				<a href="/revival/{revival.path}" class="txt">
					<div class:opacity-50={revival.defunct} class="mb-30">
						{@html revival.overview || ""}
					</div>

					{#if revival.rating}
						<div
							class:opacity-50={revival.defunct}
							class="mt-a ms-a flex">
							<span class="me-2">Rating:</span>
							<Stars rating={revival.rating.overall} />
						</div>
					{/if}
				</a>
			</div>
		{/each}
	</div>
{:else}
	<h2 class="font-300 mt-35vh text-center tracking-wide">
		No revivals yet. Watch this space!
	</h2>
{/if}

<style lang="stylus">
	.card:hover
		transform translateY(-0.3rem)
</style>
