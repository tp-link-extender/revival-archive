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

	const revivals = [
		{
			name: "Mercury",
			years: [2013],
			rating: 5,
		},
		{
			name: "Goodblox",
			years: [2009],
			rating: 4,
		},
		{
			name: "Finobe",
			years: [2012, 2016],
			rating: 4.5,
		},
		{
			name: "Meteorite",
			years: [2016, 2020],
			rating: 2.65,
		},
		{
			name: "Tadah",
			years: [2010, 2012, 2014, 2016],
			rating: 3.5,
		},
		{
			name: "Krypton",
			years: [2011],
			rating: 4.65,
		},
		{
			name: "Hamblox",
			years: [2015],
			rating: 4.65,
		},
		{
			name: "Rawblox",
			years: [2017],
			rating: 1,
		},
		{
			name: "idk18",
			years: [2018],
			rating: 1.65,
		},
		{
			name: "Kapish",
			years: [2014, 2016],
			rating: 2.35,
		},
	]
</script>

<svelte:head>
	<meta
		name="description"
		content="An index of many of the currently playable revivals." />
	<title>Revival Index • Revival Archive</title>
</svelte:head>

<h1>Revival Index</h1>

<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
	{#each revivals as revival}
		<a
			href="/index"
			class="txt bg-#1f1c1d @light:bg-white rounded-2 card durition-500
			@light:text-black box-border flex flex-col p-5 text-white
			transition hover:shadow-xl">
			<h2 class="m-0 mb-1">{revival.name}</h2>
			<div class="flex flex-wrap text-white">
				{#each revival.years as year}
					<span
						class="{years[year]}
						my-1 me-2 rounded-full px-2 py-0.5 text-sm">
						{year}
					</span>
				{/each}
			</div>
			<div class="mb-36 mt-5">
				This revival is one of the revivals ever! Play today!
			</div>

			<div class="mt-a ms-a">
				<Stars rating={revival.rating} />
			</div>
		</a>
	{/each}
</div>

<style lang="sass">
	.card:hover
		transform: translateY(-0.3rem)
</style>
