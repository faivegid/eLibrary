<script lang="ts">
	export let paginated = false;
	export let currentPage = 1;
	export let totalPages = 5;
</script>

<section>
	<div class="pagination" class:paginated>
		<div class="nav-btn">
			<button>
				<i class="fa-solid fa-chevron-right"></i>
			</button>
		</div>
		<div class="page-num" class:currentPage={currentPage === 1}>
			<button>
				<span>1</span>
			</button>
		</div>
	</div>
</section>

<style>
	button {
		margin: 0;
		padding: 20px;
		border-radius: 20px;
		font-size: 10px;
		font-weight: bold;
		text-align: center;
	}
</style>
