<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>{data.title} • Revival Archive</title>
</svelte:head>

<article class="max-w-150 mx-a">
	<span class="flex mt-10">
		<h1 class="m-0 text-2rem">{data.title}</h1>
		<span class="mt-a ms-a mb-0.5">
			Published {new Date(data.date).toLocaleDateString("en-GB", {
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
			})}
		</span>
	</span>

	<hr class="mt-3 mb-8" />

	<div class="text-justify">
		{@html data.html}
	</div>
</article>
