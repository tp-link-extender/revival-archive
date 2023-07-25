<script lang="ts">
	import when from "$lib/when"
	import Stars from "$lib/components/Stars.svelte"

	export let data

	let date = when(data.date)
	date = date == "Not yet published" ? date : `${date} by ${data.author}`
	const ratingCategories: { [k: string]: number } = data.rating || {}
</script>

<svelte:head>
	<meta name="description" content="{data.name}: {date}" />
	<title>{data.name} • Revival Archive</title>
</svelte:head>

<div class="xl:max-w-300 flex flex-col xl:flex-row">
	<article class="xl:w-180 pt-8">
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
					<div class="flex flex-wrap">
						<h1 class="text-2rem m-0 me-3">{data.name}</h1>
						{#if data.defunct}
							<p class="mb-a mt-0 text-red-500">[defunct]</p>
						{/if}
					</div>
					<span class="mt-a ms-a mb-0.5">
						{date}
						{#if data.updated}
							<br />
							<em>
								{when(data.updated, true)}
							</em>
						{/if}
					</span>
				</span>

				<hr class="mb-4 mt-3" />

				{#if data.rating}
					<div class="content pt-0.01 text-justify">
						<div class="post mb-10">
							<svelte:component this={data.content} />
						</div>
						<div class="mt-5">
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
										<td class:pt-4={category == "overall"}>
											<Stars
												rating={ratingCategories[
													category
												]} />
										</td>
									</tr>
								{/each}
							</table>
						</div>
					</div>
				{:else}
					<h2 class="font-300 text-center tracking-wide">
						This revival has not yet been reviewed. Watch this
						space!
					</h2>
				{/if}
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
					@light:hover:text-#555 rounded-3 box-border
					block text-white transition hover:shadow-xl">
					<article
						class:opacity-50={revival.defunct}
						class="mb-4 flex p-3 ps-5">
						{#if revival.logo}
							<img
								src="/logos/{revival.logo}"
								class="logo my-a me-5 h-14"
								alt="{revival.name} Logo" />
						{/if}
						<div>
							<div class="flex flex-wrap">
								<h3 class="mb-2 me-3 mt-1">{revival.name}</h3>
								{#if revival.defunct}
									<p class="mb-a mt-0 text-sm text-red-500">
										[defunct]
									</p>
								{/if}
							</div>
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

	.post
		:global(h2)
			// make h1 and h2 different sizes,
			// as they are capped by <article>
			font-size 1.35rem

		:global(blockquote)
			margin-left 0.5rem
			padding 0.5rem 0 0.5rem 1rem
			border-left 0.2rem solid #888a
			font-style italic

			:global(blockquote)
				margin-left 0rem

			:global(p)
				margin 0
				opacity 0.8
		
		:global(p)
			word-wrap: break-word
			float: right
</style>
