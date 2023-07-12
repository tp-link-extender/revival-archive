<script lang="ts">
	import when from "$lib/when"

	export let data
</script>

<svelte:head>
	<title>Blog • Revival Archive</title>
</svelte:head>

<h1>Blog Posts</h1>

{#each data.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as post}
	<a
		href="/post/{post.path}"
		class="txt @light:text-dark hover:text-#ccc
		@light:hover:text-#555 bg-a rounded-3 durition-500 box-border
		block text-white transition hover:shadow-xl">
		<article class="mb-4 px-6 py-3">
			<h2 class="mb-2 mt-1">{post.title}</h2>
			<p class="my-2">
				{when(post.date)}
			</p>
		</article>
	</a>
{/each}

<style lang="sass">
	a:hover
		transform: translateY(-0.15rem)
</style>
