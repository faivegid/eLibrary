<script lang="ts">
	import type { BookDetail } from "$lib/interfaces";
	import { onMount } from "svelte";
	import BookDetails from "../../../components/BookDetails.svelte";
	import { books } from "$lib/store";

	export let data = {};

	let book: BookDetail = books[0];

	onMount(() => {
		console.log(data);
	});
</script>

<section class="section-container">
	<BookDetails {book} />
</section>

<style>
	.section-container {
		width: 80%;
		display: flex;
		padding: 20px;
		margin-top: 30px;
	}
</style>
