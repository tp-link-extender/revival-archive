<script lang="ts">
	export let data
</script>

<article class="w-full sm:w-140 mx-auto">
	<span class="flex my-10">
		<h1 class="m-0">{data.title}</h1>
		<span class="mt-auto ms-3">
			Published {new Date(data.date).toLocaleDateString("en-GB", {
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
			})}
		</span>
	</span>

	<div class="text-justify">
		{@html data.html}
	</div>
</article>
