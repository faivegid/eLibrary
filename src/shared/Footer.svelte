<script>
</script>

<footer>
	<div class="image">
		<img src="/black_logo.png" alt="" />
	</div>
	<div class="contact-list">
		<ul>
			<li>
				<span class="icons"><i class="fa-solid fa-phone"></i></span>
				<span class="span-text">+185 123 456 7890</span>
			</li>
			<li>
				<span class="icons"><i class="fa-solid fa-location-dot"></i></span>
				<span class="span-text"
					>1234 Elm Street, Anytown, ABC123, Fictional Country.</span
				>
			</li>
			<li>
				<span class="icons"><i class="fa-solid fa-envelope"></i></span>
				<span class="span-text">martha.library@example.com</span>
			</li>
		</ul>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		align-content: center;
		margin-top: 20px;
	}

	img {
		max-width: 300px;
	}

	.image {
		margin-right: 20px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 10px;
	}

	.icons {
		margin-right: 5px;
	}

	i {
		text-align: right;
		width: 20px;
	}

	.span-text {
		flex: 1;
		text-align: left;
	}
</style>
