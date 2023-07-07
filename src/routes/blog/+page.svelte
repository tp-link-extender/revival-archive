<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>Blog • Revival Archive</title>
</svelte:head>

<h1>Posts</h1>

{#each data.posts as post}
	<a href="/blog/{post.path}" class="text-white hover:text-#aaa">
		<article class="bg-#1f1c1d py-3 px-6 rounded-5 mb-4">
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
