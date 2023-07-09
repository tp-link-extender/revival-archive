<div class="bg-#1f1d1c @light:bg-white w-full lg:w-90 lg:h-a
	ps-6 pb-3 lg:pt-42 fixed lg:static flex lg:flex-col flex-wrap">
	<span class="mt-3 me-12 lg:me-0 hidden sm:inline-block">
		<a
			href="/"
			class="txt text-white @light:text-black
			text-2xl lg:text-2.2rem font-600">
			Revival Archive
		</a>
	</span>
	<nav class="flex lg:flex-col flex-wrap
	box-border justify-self-center mt-3">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/index">Revival Index</a>
		<a href="/blog">Blog</a>
	</nav>
</div>

<style lang="sass">
	nav a
		@apply no-underline me-5 rounded-1 transition

		margin: auto 1rem auto 0

		font-size: 1.3rem
		@media screen and (max-width: 1023px)
			font-size: 1rem

		color: white
		@media (prefers-color-scheme: light)
			color: black

		
		@media screen and (min-width: 1024px)
			&::before
				color: #aaa
				transition: 0.25s
				content: "→ "
				opacity: 0

	a
		&:hover
			color: #aaa
			&::before
				margin-right: 0.5rem
				opacity: 1

		&:active
			color: #7f7f7f
</style>
