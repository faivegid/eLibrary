<script lang="ts">
	import { redirectTo } from "$lib";
	import Copyright from "../../shared/Copyright.svelte";
	import WaterMarkLogo from "../../shared/WaterMarkLogo.svelte";
	import { title } from "./title";

	let pageTitle = "Default Title";
	title.subscribe((value: string) => {
		pageTitle = value;
	});
</script>

<WaterMarkLogo>
	<main>
		<div class="container">
			<button on:click={() => redirectTo("/")} class="logo">
				<img
					class="img-logo"
					src="../black_logo.png"
					alt="Martha Library logo"
				/>
			</button>

			<div class="line-container">
				<span class="line"></span>
				<span class="text">{pageTitle}</span>
				<span class="line"></span>
			</div>

			<slot />

			<Copyright />
		</div>
	</main>
</WaterMarkLogo>

<style>
	main {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		width: 300px;
		margin: 0;
		padding: 2em;
		border-radius: 30px;
		background-color: #fff;
		box-shadow: 2px 4px 10px 2px #0003;
	}

	.logo {
		align-items: center;
		border: none;
		background: transparent;
	}

	.img-logo {
		max-width: 100%;
		height: auto;
		display: block;
	}

	.line-container {
		margin: 20px auto;
		margin-bottom: 0px;
		padding: 10px;
		display: flex;
		align-items: center;
	}

	.line {
		flex: 1;
		height: 1px;
		background-color: #000; /* Change color as needed */
		width: 10%;
	}

	.text {
		padding: 0 10px;
		font-size: 16px;
	}

	.logo:hover {
		transform: scale(1.1);
	}
</style>
