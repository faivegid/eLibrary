<script lang="ts">
	export let tip = "";
</script>

<div id="getInfo" role="tooltip" aria-label={tip}>
	<span class="yourTooltip">{tip}</span>
	<slot />
</div>

<style>
	#getInfo {
		position: relative;
		display: inline-block;
		display: flex;
		flex-direction: column;
	}

	#getInfo .yourTooltip {
		display: none;
		background-color: #555;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 10px;
		position: absolute;
		z-index: 999;
		top: 0;
		margin-top: -40px;
		/* bottom: 125%;
		left: auto; */
		opacity: 0;
		transition: opacity 1s;
	}

	#getInfo .yourTooltip::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #555 transparent transparent transparent;
	}

	#getInfo:hover .yourTooltip {
		display: block;
		opacity: 1;
	}
</style>
