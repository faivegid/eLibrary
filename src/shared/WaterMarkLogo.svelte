<div class="water-mark">
	<slot />
</div>

<style>
	.water-mark {
		width: 100%;
		margin: 0;
		padding: 0;
		height: 100vh;
		background-image: url("../black_logo.png");
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-color: rgba(255, 255, 255, 0.8);
	}
</style>
