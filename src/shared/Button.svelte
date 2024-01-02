<script>
	export let type = "primary";
	export let flat = false;
	export let inverse = false;

	const toggleInverse = () => {
		inverse = !inverse;
	};
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
	class={type}
	class:flat
	class:inverse
	on:click
	on:mouseover={toggleInverse}
	on:focusin={toggleInverse}
	on:focusout={toggleInverse}
	on:mouseout={toggleInverse}
>
	<slot />
</button>

<style>
	button {
		border: 0;
		padding: 10px 16px;
		cursor: pointer;
		border-radius: 8px;
		font-weight: bold;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		margin: 0px;
	}

	.primary {
		background-color: #1e6c3c;
		color: white;
		border: 1px solid #1e6c3c;
	}

	.delete {
		background-color: #d91b42;
		color: white;
		border: 1px solid #d91b42;
	}

	.dark {
		background-color: #000;
		color: #fff;
		border: 1px solid #000;
	}

	.secondary {
		background-color: #6c757d;
		color: white;
		border: 1px solid #6c757d;
	}

	.flat {
		box-shadow: none;
	}

	.primary.inverse {
		color: #007bff;
		background-color: inherit;
		border: 1px solid #007bff;
	}

	.secondary.inverse {
		color: #6c757d;
		background-color: inherit;
		border: 1px solid #6c757d;
	}

	.delete.inverse {
		color: #d91b42;
		background-color: inherit;
		border: 1px solid #d91b42;
	}

	.dark.inverse {
		color: #000;
		background-color: inherit;
		border: 1px solid #000;
	}

	.white {
		color: #fff;
		background-color: rgba(0, 0, 0, 0);
		border: 1px solid #fff;
	}

	.white.inverse {
		background-color: #6c757d;
		color: white;
		border: 1px solid #6c757d;
	}
</style>
