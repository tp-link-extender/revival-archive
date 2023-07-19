<div
	class="bg-#1f1d1c @light:bg-white lg:w-90 lg:h-a lg:pt-42
	z-1 fixed flex w-full flex-wrap pb-3 ps-6 lg:static lg:flex-col">
	<span class="me-12 mt-3 hidden sm:inline-block lg:me-0">
		<a href="/" class="txt lg:text-2.2rem font-600 text-2xl">
			Revival Archive
		</a>
	</span>
	<nav
		class="mt-3 box-border flex
	flex-wrap justify-self-center lg:flex-col">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/revivals">Revival Index</a>
		<a href="/reviews">Reviews</a>
		<a href="/blog">Blog</a>
	</nav>
</div>

<style lang="stylus">
	nav a
		@apply no-underline me-5 rounded-1 transition

		margin 5px 1rem auto 0

		font-size 1.3rem
		+-lg()
			font-size 1rem

		color white
		+lightTheme()
			color black

		+lg()
			&::before
				color #aaa
				transition 0.25s
				content "→ "
				opacity 0

	a
		&:hover
			color #aaa
			&::before
				margin-right 0.5rem
				opacity 1

		&:active
			color #7f7f7f
</style>
