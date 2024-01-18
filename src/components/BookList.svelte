<script lang="ts">
	import type { BookDetail } from "$lib/interfaces";
	import BookCard from "./BookCard.svelte";
	import Pagination from "../shared/Pagination.svelte";

	export let bookList: BookDetail[];
</script>

{#if bookList}
	<div class="inner-container">
		{#each bookList as book}
			<div class="box-items">
				<BookCard {book} />
			</div>
		{/each}
	</div>
{:else}
	<span>No books to display</span>
{/if}

{#if bookList}
	<Pagination currentPage={1} totalPages={11} />
{/if}

<style>
	.inner-container {
		padding: 10px;
		margin: 10px;
		/* display: grid;
		grid-template-columns: repeat(auto-fill, minmax(162px, 1fr)); */
		/* grid-gap: 40px; */
		overflow: hidden;
		margin-bottom: 40px;
		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
