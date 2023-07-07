<script lang="ts">
	import { page } from "$app/stores"
</script>

<div class="flex flex-col justify-center items-center h-72vh">
	<div class="bg-#1f1c1d p-8 px-22 rounded-4 light-text text-center">
		<h1 class="light-text m-0 mb-5 text-2.2rem">Error {$page.status}</h1>
		{$page.error?.message}
	</div>
</div>
