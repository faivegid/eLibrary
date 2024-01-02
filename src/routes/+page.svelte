<script lang="ts">
	import ScrollList from "./../components/ScrollList.svelte";
	import Button from "./../shared/Button.svelte";
	import Copyright from "../shared/Copyright.svelte";
	import SearchBox from "../shared/SearchBox.svelte";
	import { redirectTo } from "$lib/index";
	import Footer from "../shared/Footer.svelte";
	import type { BookDetail } from "$lib/interface";

	const handleSearch = (e: CustomEvent) => {
		console.log(e.detail);
	};

	let bookList: BookDetail[] = [
		{
			bookImg: "/books/sample_book_1.jpg",
			bookTitle: "Journey to the west",
			avgRating: 4.5,
			author: "Shan Quing",
			id: "one",
		},
		{
			bookImg: "/books/sample_book_1.jpg",
			bookTitle: "Journey to the west",
			avgRating: 4.5,
			author: "Shan Quing",
			id: "two",
		},
		{
			bookImg: "/books/sample_book_1.jpg",
			bookTitle: "Journey to the west",
			avgRating: 4.5,
			author: "Shan Quing",
			id: "three",
		},
		{
			bookImg: "/books/sample_book_1.jpg",
			bookTitle: "Journey to the west",
			avgRating: 4.5,
			author: "Shan Quing",
			id: "four",
		},
		{
			bookImg: "/books/sample_book_1.jpg",
			bookTitle: "Journey to the west",
			avgRating: 4.5,
			author: "Shan Quing",
			id: "five",
		},
	];
</script>

<main>
	<div class="image">
		<div class="container">
			<div class="searchBox">
				<SearchBox on:search={handleSearch} />
			</div>
			<div class="content">
				<img class="white-logo" src="white_logo.png" alt="" />
			</div>
			<div class="login-btn">
				<Button
					type="white"
					flat={true}
					on:click={() => redirectTo("/account/login")}
					>Login <i class="fa-solid fa-right-to-bracket"></i></Button
				>
			</div>
		</div>
	</div>
	<div class="top-rated">
		<div class="books">
			<ScrollList {bookList} />
		</div>
		<div class="bottom-btn">
			<Button type="secondary" inverse={true}>Browse More</Button>
		</div>
	</div>
	<Footer />
	<Copyright />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image {
		width: 100%;
		height: 70vh;
		border: 1px solid black;
		background-image: url("home_page.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.container {
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.5),
			rgba(255, 255, 255, 0)
		);
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}

	.searchBox {
		margin-top: 20px;
	}

	.content {
		align-self: flex-start;
		margin-left: 40px;
	}

	.white-logo {
		width: 500px;
	}

	.top-rated {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		margin-top: 20px;
		width: 93%;
	}

	.login-btn {
		margin: 10px 0;
	}

	.books {
		width: 100%;
		padding: 10px;
	}
</style>
