<script lang="ts">
	import { page } from "$app/stores"
</script>

<svelte:head>
	<meta name="description" content={$page.error?.message} />
	<title>{$page.error?.message} • Revival Archive</title>
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<div class="bg-a p-8 px-22 rounded-4 text-center mt-30vh">
		<h1 class="m-0 mb-5 text-2.2rem">Error {$page.status}</h1>
		{$page.error?.message}
	</div>
</div>
