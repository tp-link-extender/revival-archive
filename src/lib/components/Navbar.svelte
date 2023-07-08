<div class="bg-#282625 @light:bg-white px-6">
	<span class="inline-block pt-3 pb-3">
		<a href="/" class="txt text-white @light:text-black hover:text-#aaa text-xl font-light mb-5">
			Revival Archive
		</a>
	</span>
	<span class="inline-block pb-4">
		<nav class="inline-block ps-4">
			<a class="navlink" href="/">Home</a>
			<a class="navlink" href="/about">About</a>
			<a class="navlink" href="/index">Revival Index</a>
			<a class="navlink" href="/blog">Blog</a>
		</nav>
	</span>
</div>

<style lang="sass">
	.navlink
		@apply no-underline px-2 me-1 rounded-1 transition
		font-size: 0.9rem

		color: white
		@media (prefers-color-scheme: light)
			color: black

		&:hover
			@apply text-#aaa
</style>
