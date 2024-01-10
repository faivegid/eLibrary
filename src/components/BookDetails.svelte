<script lang="ts">
	import Button from "./../shared/Button.svelte";
	import type { BookDetail } from "$lib/interface";
	import StarRating from "../shared/StarRating.svelte";
	import Tooltip from "../shared/Tooltip.svelte";

	export let book: BookDetail;
</script>

<section>
	<div class="top-continaer">
		<dic class="item book-img">
			<img src={book.bookImg} alt="" />
		</dic>
		<div class="item book-detail">
			<span>{book.bookTitle} </span>
			<span>Author: {book.author}</span>
			<Tooltip tip={`${book.avgRating}`}>
				<div class="reviews">
					<StarRating rate={book.avgRating} />
					<span>20 reviews</span>
				</div>
			</Tooltip>
			<div class="book-abstract">
				<span
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					ducimus sint, velit odit modi facere hic, assumenda natus nostrum
					optio qui commodi! Explicabo eaque laborum impedit, quis sunt commodi
					assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Perspiciatis modi quidem laudantium fugiat velit. Esse ut magnam
					debitis non, possimus nam velit omnis aperiam nostrum, necessitatibus
					laboriosam quaerat harum perspiciatis! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Deserunt animi eligendi itaque magnam
					sunt officia omnis inventore quas rerum perferendis. Dolore pariatur
					error reiciendis hic ipsa natus repudiandae eligendi
					exercitationem.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Reiciendis ducimus sint, velit odit modi facere hic, assumenda
					natus nostrum optio qui commodi! Explicabo eaque laborum impedit, quis
					sunt commodi assumenda! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Perspiciatis modi quidem laudantium fugiat velit.
					Esse ut magnam debitis non, possimus nam velit omnis aperiam nostrum,
					necessitatibus laboriosam quaerat harum perspiciatis! Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Deserunt animi eligendi
					itaque magnam sunt officia omnis inventore quas rerum perferendis.
					Dolore pariatur error reiciendis hic ipsa natus repudiandae eligendi
					exercitationem.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Reiciendis ducimus sint, velit odit modi facere hic, assumenda
					natus nostrum optio qui commodi! Explicabo eaque laborum impedit, quis
					sunt commodi assumenda! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Perspiciatis modi quidem laudantium fugiat velit.
					Esse ut magnam debitis non, possimus nam velit omnis aperiam nostrum,
					necessitatibus laboriosam quaerat harum perspiciatis! Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Deserunt animi eligendi
					itaque magnam sunt officia omnis inventore quas rerum perferendis.
					Dolore pariatur error reiciendis hic ipsa natus repudiandae eligendi
					exercitationem.
				</span>
				<div class="gradientback"></div>
			</div>

			<div class="btn">
				<Button type="dark">Reserve Book</Button>
			</div>
		</div>
	</div>
	<div class="table-container">
		<table>
			<tr>
				<td class="property">BookK title</td>
				<td class="value">book title</td>
			</tr>

			<tr>
				<td class="property">BookK title</td>
				<td class="value">book title</td>
			</tr>
			<tr>
				<td class="property">BookK title</td>
				<td class="value">book title</td>
			</tr>
			<tr>
				<td class="property">BookK title</td>
				<td class="value">book title</td>
			</tr>
			<tr>
				<td class="property">BookK title</td>
				<td class="value">book title</td>
			</tr>
		</table>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.top-continaer {
		display: flex;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.book-img {
		flex: 0 0 30%;
	}

	.book-detail {
		flex: 0 0 70%;
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.book-img img {
		width: 100%; /* Set the image width to 100% of the container */
		height: auto; /* Allow the height to adjust proportionally */
		max-width: 100%;
		border-radius: 10px;
	}

	.reviews {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.btn {
		align-self: flex-end;
	}

	.book-abstract {
		text-align: justify;
		height: 180px;
		overflow: hidden;
		position: relative;
	}

	.gradientback {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 50px;

		background: linear-gradient(
			to bottom,
			rgba(137, 255, 241, 0) 50%,
			rgba(255, 255, 255, 1) 100%
		); /* W3C */
	}

	.table-container {
		width: 100%;
		margin-top: 50px;
		display: flex;
	}
	table {
		border-collapse: collapse;
		width: 80%;
		margin: 20px auto;
	}

	td {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	.property {
		background-color: #f9f9f9;
		width: 30%;
	}

	.value {
		background-color: #ffffff;
		width: 70%;
	}
</style>
