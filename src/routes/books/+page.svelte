<script>
	import BookList from "../../components/BookList.svelte";
	import { books } from "$lib/store";
</script>

<BookList bookList={books}></BookList>
