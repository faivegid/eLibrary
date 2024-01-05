<script lang="ts">
	import type { BookDetail } from "$lib/interface";
	import { onMount } from "svelte";
	import BookDetails from "../../../components/BookDetails.svelte";
	import { books } from "$lib/store";

	export let data = {};

	let book: BookDetail = books[0];

	onMount(() => {
		console.log(data);
	});
</script>

<section>
	<BookDetails {book} />
</section>

<style>
</style>
