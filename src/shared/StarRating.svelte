<script>
	export let rate = 1;
</script>

<div class="star-rating">
	{#each Array(Math.floor(rate)) as _, i}
		<i class="fa-solid fa-star"></i>
	{/each}
	{#if rate - Math.floor(rate) > 0}
		<i class="fa-solid fa-star-half"></i>
	{/if}
</div>

<style>
	.fa-solid {
		color: #ff8f33;
	}

	.star-rating {
		font-size: 14px;
	}
</style>
