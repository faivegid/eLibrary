<script lang="ts">
	import type { BookDetail } from "$lib/interface";
	import BookCard from "./BookCard.svelte";
	import { onMount } from "svelte";

	export let bookList: BookDetail[];

	let container: HTMLDivElement;
	const scrollAmount = 150;

	let disableLeft = false;
	$: disableRight = false;

	const scrollLeft = () => {
		if (container) {
			container.scrollLeft -= scrollAmount;
			disableLeft = container.scrollLeft === 0;
		}
	};

	const scrollRight = () => {
		if (container) {
			container.scrollLeft += scrollAmount;
			disableRight =
				Math.round(container.scrollLeft + container.clientWidth) >=
				container.scrollWidth;
		}
	};

	const updatePosition = () => {
		disableLeft = container.scrollLeft === 0;
		disableRight =
			Math.round(container.scrollLeft + container.clientWidth) >=
			container.scrollWidth;

		console.log(
			disableRight,
			container.scrollLeft,
			container.clientWidth,
			container.scrollWidth,
		);
	};

	onMount(() => {
		updatePosition();
	});
</script>

<section>
	{#if bookList}
		<div
			class="scroll-btn left"
			class:inactive={disableLeft}
			class:active={!disableLeft}
		>
			<button on:click={scrollLeft}
				><i class="fa-solid fa-circle-chevron-left"></i></button
			>
		</div>

		<div class="box-container" on:scroll={updatePosition} bind:this={container}>
			{#each bookList as book}
				<div class="box-items">
					<BookCard {book} />
				</div>
			{/each}
		</div>

		<div
			class="scroll-btn right"
			class:inactive={disableRight}
			class:active={!disableRight}
		>
			<button on:click={scrollRight}
				><i class="fa-solid fa-circle-chevron-right"></i></button
			>
		</div>
	{:else}
		<span>No books to display</span>
	{/if}
</section>

<style>
	section {
		display: flex;
		align-items: center;
		background-color: transparent;
	}

	.box-container {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		overflow-x: auto;
		scroll-behavior: smooth;
		background-color: transparent;
	}

	.box-container {
		scrollbar-width: none;
	}

	.box-container::-webkit-scrollbar {
		display: none;
	}

	.box-items {
		flex: 0 0 auto;
		box-sizing: border-box;
		margin: 10px;
		padding: 20px;
	}

	.scroll-btn {
		display: flex;
		height: 100%;
		border: none;
	}

	.scroll-btn button {
		margin: 0;
		padding: 0;
		border-radius: 35px;
		font-size: 35px;
		border: none;
		color: #000;
	}

	.inactive {
		pointer-events: none;
		opacity: 0.4;
	}

	.active:hover {
		transform: scale(1.1);
	}

	.scroll-btn .left {
		margin-right: 10px;
	}

	.scroll-btn .right {
		margin-left: 10px;
	}
</style>
