<script lang="ts">
	import when from "$lib/when"

	export let data
</script>

<svelte:head>
	<meta name="description" content="{data.title}: {when(data.date)}" />
	<title>{data.title} • Revival Archive</title>
</svelte:head>

<div class="xl:max-w-300 flex flex-col xl:flex-row">
	<article class="xl:w-180 pt-8">
		<div class="-ms-4">
			<a href="/blog" class="hover:text-#888">← Back to blog</a>
			<div class="ms-4">
				<span class="mt-2 flex">
					<h1 class="text-2rem m-0">{data.title}</h1>
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
					<svelte:component this={data.content} />
				</div>
			</div>
		</div>
	</article>

	{#if data.posts.length > 0}
		<section class="w-120 xl:max-w-100 xl:ms-12 xl:mt-14">
			<h2>Other posts</h2>
			{#each data.posts as post}
				<a
					href="/post/{post.path}"
					class="txt bg-a @light:text-dark hover:text-#ccc
					@light:hover:text-#555 rounded-3 box-border
					block text-white transition hover:shadow-xl">
					<article class="mb-4 px-6 py-3">
						<h3 class="my-2">{post.title}</h3>
						<small class="pb-5">
							{when(post.date)}
						</small>
					</article>
				</a>
			{/each}
		</section>
	{/if}
</div>

<style lang="stylus">
	section a:hover
		transform translateY(-0.15rem)

	.content 
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
</style>
