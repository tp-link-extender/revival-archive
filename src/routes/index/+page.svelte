<script lang="ts">
	const years: { [k: number]: string } = {
		2009: "bg-red-600",
		2011: "bg-orange-500 text-black",
		2012: "bg-yellow-500 text-black",
		2013: "bg-green-600",
		2014: "bg-teal-600",
		2016: "bg-blue-600",
		2018: "bg-indigo-600",
		2020: "bg-purple-600",
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
			rating: 4.5
		},
		{
			name: "Meteorite",
			years: [2016, 2020],
			rating: 2.65,
		},
		{
			name: "Krypton",
			years: [2011],
			rating: 4.65,
		},
		{
			name: "Tadah",
			years: [2014],
			rating: 3.5,
		},
		{
			name: "Kapish",
			years: [2014],
			rating: 2.35,
		},
		{
			name: "Fobe",
			years: [2016],
			rating: 1,
		},
		{
			name: "idk18",
			years: [2018],
			rating: 1.65,
		},
	]
</script>

<svelte:head>
	<title>Revival Index • Revival Archive</title>
</svelte:head>

<h1>Revival Index</h1>

<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
	{#each revivals as revival}
		<div class="bg-#1f1c1d p-5 rounded-2 flex flex-col">
			<h2 class="m-0 mb-1">{revival.name}</h2>
			<div>
				{#each revival.years as year}
					<span
						class="rounded-full {years[year]} px-2 py-0.5 text-sm me-2">
						{year}
					</span>
				{/each}
			</div>
			<div class="my-20 text-center">
				<code>revival logo goes here</code>
			</div>

			<div class="mt-a ms-a">
				<Stars rating={revival.rating} />
			</div>
		</div>
	{/each}
</div>
