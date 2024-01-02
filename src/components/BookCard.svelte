<script lang="ts">
	import type { BookDetail } from "$lib/interface";
	import Button from "../shared/Button.svelte";
	import StarRating from "../shared/StarRating.svelte";

	export let book: BookDetail = {
		bookImg: "",
		bookTitle: "Default Title",
		author: "Author's Name",
		avgRating: 5,
		id: "zero",
	};
</script>

<div class="card">
	<div class="image-container">
		<img src={book.bookImg} alt="book cover pciture" />
	</div>

	<div class="title">
		<span>Book title: {book.bookTitle}</span>
	</div>

	<div class="rating">
		<StarRating rate={book.avgRating} />
	</div>

	<div class="button">
		<Button type="dark">View</Button>
	</div>
</div>

<style>
	.card {
		object-fit: contain;
		background: #fff;
		padding: 20px;
		border-radius: 6px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
	}

	.card:hover {
		transform: scale(1.05);
	}

	.image-container {
		width: 220px;
		height: 230px;
		overflow: hidden;
		border-radius: 10px;
		position: relative;
		margin-bottom: 10px;
	}

	.image-container img {
		height: auto;
		width: 100%;
		object-fit: cover;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.button,
	.rating {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		margin-top: 10px;
	}
</style>
