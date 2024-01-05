<script>
	import SideMenuBar from "./../../shared/SideMenuBar.svelte";
	import Footer from "./../../shared/Footer.svelte";
	import Copyright from "../../shared/Copyright.svelte";
	import SearchBox from "../../shared/SearchBox.svelte";
</script>

<SideMenuBar>
	<div class="content">
		<div class="searchbox">
			<SearchBox />
		</div>

		<slot />

		<div class="footer">
			<Footer />
			<Copyright />
		</div>
	</div>
</SideMenuBar>

<style>
	body {
		background: #fafafa;
	}

	.content {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.searchbox {
		padding: 10px;
		margin: 0;
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
