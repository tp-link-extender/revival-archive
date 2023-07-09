<script lang="ts">
	import { page } from "$app/stores"
</script>

<svelte:head>
	<meta name="description" content={$page.error?.message} />
	<title>{$page.error?.message} • Revival Archive</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="bg-a px-22 rounded-4 mt-30vh p-8 text-center">
		<h1 class="text-2.2rem m-0 mb-5">Error {$page.status}</h1>
		{$page.error?.message}
	</div>
</div>
