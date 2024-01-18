<script lang="ts">
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	var searchText = "";
	let focus = false;

	const handleSearch = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			dispatch("search", { searchText });
		}
	};

	const toggleFocus = () => {
		focus = !focus;
	};
</script>

<siv class="search-box" class:focus>
	<input
		type="text"
		value={searchText}
		on:keypress={handleSearch}
		on:focus={toggleFocus}
		on:blur={toggleFocus}
	/>
	<button on:click={() => dispatch("search", { searchText })}>
		<i class="fa-solid fa-magnifying-glass"></i>
	</button>
</siv>

<style>
	.search-box {
		font-size: 14px;
		padding: 6px;
		border-radius: 15px;
		border: 0.5px solid black;
		text-align: center;
		background-color: #fff;
		margin: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.focus {
		background: #ddd;
	}

	input {
		padding: 0;
		margin: 0;
		border: none;
		margin-left: 5px;
		background: inherit;
	}

	input:focus {
		outline: none;
	}

	button {
		margin: 0;
		padding: 0px 0 0px 20px;
		background: inherit;
		border: none;
		outline: none;
		cursor: pointer;
	}

	i:hover,
	i:focus {
		font-size: 15px;
	}

	@media (max-width: 500px) {
		input {
			width: 120px;
		}
	}
</style>
