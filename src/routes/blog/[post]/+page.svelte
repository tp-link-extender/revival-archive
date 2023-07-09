<script lang="ts">
	const when = (date: Date) =>
		new Date(date).toLocaleDateString("en-GB", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		})

	export let data
</script>

<svelte:head>
	<meta name="description" content="{data.title}: {when(data.date)}" />
	<title>{data.title} • Revival Archive</title>
</svelte:head>

<div class="xl:max-w-300 flex flex-col xl:flex-row">
	<article class="max-w-150 pt-8">
		<div class="-ms-4">
			<a href="/blog" class="hover:text-#888">← Back to blog</a>
			<div class="ms-4">
				<span class="mt-2 flex">
					<h1 class="text-2rem m-0">{data.title}</h1>
					<span class="mt-a ms-a mb-0.5">
						Published {when(data.date)}
					</span>
				</span>

				<hr class="mb-8 mt-3" />

				<div class="text-justify">
					{@html data.html}
				</div>
			</div>
		</div>
	</article>
	{#if data.posts.length > 0}
		<section class="w-150 xl:max-w-100 xl:ms-12 xl:mt-14">
			<h2>Other posts</h2>
			{#each data.posts as post}
				<a
					href="/blog/{post.path}"
					class="txt bg-a @light:text-dark hover:text-#ccc
					@light:hover:text-#555 rounded-3 durition-500 box-border
					block text-white transition hover:shadow-xl">
					<article class="mb-4 px-6 py-3">
						<h3 class="my-2">{post.title}</h3>
						<small class="pb-5">
							Published {when(post.date)}
						</small>
					</article>
				</a>
			{/each}
		</section>
	{/if}
</div>

<style lang="sass">
	section a:hover
		transform: translateY(-0.15rem)
</style>
