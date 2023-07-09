<script lang="ts">
	const years: { [k: number]: string } = {
		2008: "bg-fuchsia-500 text-black",
		2009: "bg-rose-400 text-black",
		2010: "bg-red-600",
		2011: "bg-orange-500 text-black",
		2012: "bg-yellow-500 text-black",
		2013: "bg-lime-500 text-black",
		2014: "bg-emerald-600 text-black",
		2015: "bg-cyan-600 text-black",
		2016: "bg-blue-600 ",
		2017: "bg-indigo-600",
		2018: "bg-violet-400 text-black",
		2019: "bg-purple-600",
		2020: "bg-slate-600",
	}

	export let data
</script>

<svelte:head>
	<meta
		name="description"
		content="An index of many of the currently playable revivals." />
	<title>Revival Index • Revival Archive</title>
</svelte:head>

<h1>Revival Index</h1>

<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
	{#each data.revivals as revival}
		<a
			href="/revival/{revival.path}"
			class="txt bg-#1f1c1d @light:bg-white rounded-2 card durition-500
			@light:text-black box-border flex flex-col p-5 text-white
			transition hover:shadow-xl">
			<h2 class="m-0 mb-1">{revival.name}</h2>
			<div class="flex flex-wrap text-white">
				{#each revival.clients as year}
					<span
						class="{years[year]}
						my-1 me-2 rounded-full px-2 py-0.5 text-sm">
						{year}
					</span>
				{/each}
			</div>
			<div class="mb-30">
				{@html revival.overview}
			</div>

			<div class="mt-a ms-a flex">
				<span class="me-2">Rating:</span>
				<Stars rating={revival.rating} />
			</div>
		</a>
	{/each}
</div>

<style lang="sass">
	.card:hover
		transform: translateY(-0.3rem)
</style>
