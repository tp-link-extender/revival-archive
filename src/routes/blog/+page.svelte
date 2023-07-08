<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>Blog • Revival Archive</title>
</svelte:head>

<h1>Posts</h1>

{#each data.posts as post}
	<a href="/blog/{post.path}" class="txt text-white @light:text-dark
		hover:text-#ccc @light:hover:text-#555 block bg-a rounded-3
		transition durition-500 hover:shadow-xl box-border">
		<article class="py-3 px-6 mb-4">
			<h2 class="my-2">{post.title}</h2>
			<p class="my-2">
				Published {new Date(post.date).toLocaleDateString("en-GB", {
					year: "numeric",
					month: "long",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
				})}
			</p>
		</article>
	</a>
{/each}

<style lang="sass">
	a:hover
		transform: translateY(-0.15rem)
</style>
