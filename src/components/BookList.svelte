<script lang="ts">
	import type { BookDetail } from "$lib/interface";
	import BookCard from "./BookCard.svelte";
	import Pagination from "../shared/Pagination.svelte";

	export let bookList: BookDetail[];
</script>

<div class="outer-container">
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
</div>

{#if bookList}
	<Pagination currentPage={1} totalPages={11} />
{/if}

<style>
	.inner-container {
		padding: 10px;
		margin: 10px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
		grid-gap: 40px;
		max-width: 90vw;
		overflow: hidden;
		margin-bottom: 40px;
	}
</style>
