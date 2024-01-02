<script>
	export let url = "#";
	export let color = "";
</script>

<a href={url} class={color}>
	<slot />
</a>

<style>
	a {
		color: #007bff;
		cursor: pointer;
	}
	a:hover {
		opacity: 0.6;
	}
	a::after {
		color: blueviolet;
	}
</style>
