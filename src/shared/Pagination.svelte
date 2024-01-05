<script lang="ts">
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let currentPage = 1;
	export let totalPages = 5;

	const constantNumOfPagebtn = 5;

	let numStart = 1;

	if (currentPage >= constantNumOfPagebtn) {
		if (totalPages - currentPage < constantNumOfPagebtn) {
			numStart = totalPages - constantNumOfPagebtn + 1;
		} else if (currentPage % constantNumOfPagebtn === 0) {
			numStart = currentPage;
		} else {
			numStart =
				constantNumOfPagebtn * Math.floor(currentPage / constantNumOfPagebtn);
			numStart++;
		}
	}

	const backward = () => {
		currentPage =
			numStart - constantNumOfPagebtn <= 0
				? 1
				: numStart - constantNumOfPagebtn;
		numStart = currentPage;
	};

	const forward = () => {
		if (numStart + constantNumOfPagebtn < totalPages) {
			currentPage = numStart + constantNumOfPagebtn;
			numStart = currentPage;
		} else {
			currentPage = numStart + constantNumOfPagebtn;
			numStart = currentPage - constantNumOfPagebtn + 1;
		}
	};

	const handlePageSwitch = (page: number) => {
		currentPage = page;

		dispatch("switchPage", { page });
	};
</script>

<section class="pagination">
	<div class="mr nav-btn">
		<button on:click={backward} class:inactive={numStart === 1}>
			<i class="fa-solid fa-chevron-left"></i>
		</button>
	</div>

	{#each Array(Math.floor(constantNumOfPagebtn)) as _, i}
		{#if numStart + i <= totalPages}
			<div class="mr page-num" class:currentPage={currentPage === numStart + i}>
				<button on:click={() => handlePageSwitch(numStart + i)}
					><span>{numStart + i}</span>
				</button>
			</div>
		{/if}
	{/each}

	<div class="nav-btn">
		<button
			on:click={forward}
			class:inactive={numStart + constantNumOfPagebtn > totalPages}
		>
			<i class="fa-solid fa-chevron-right"></i>
		</button>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.mr {
		margin-right: 5px;
	}

	button {
		margin: 0;
		padding: 7px 12px;
		border-radius: 100%;
		font-size: 14px;
		text-align: center;
		background: #fff;
		color: #000;
		border: 0.5px solid #000;
	}

	button:hover {
		transform: scale(1.2);
		background: #000;
		color: #fff;
	}

	.currentPage button {
		background: #000;
		color: #fff;
		pointer-events: none;
	}

	.inactive {
		pointer-events: none;
	}
</style>
