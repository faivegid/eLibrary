<script lang="ts">
	import { SideBarItems } from "$lib/enum";
	import { redirectTo } from "$lib/index";

	export let currentItem = SideBarItems.Home;
</script>

<section class="sidebar">
	<div class="logo">
		<button class="logo-btn" on:click={() => redirectTo("/")}
			><img src="/standalone_black.png" alt="" /></button
		>
	</div>
	<div class="menu">
		<button
			class="menu-items"
			class:currentItem={currentItem === SideBarItems.Home}
			on:click={() => (currentItem = SideBarItems.Home)}
		>
			<i class="fa-solid fa-house"></i>
		</button>
		<button
			class="menu-items"
			class:currentItem={currentItem === SideBarItems.Dashboard}
			on:click={() => (currentItem = SideBarItems.Dashboard)}
		>
			<i class="fa-solid fa-chart-simple"></i>
		</button>
		<button
			class="menu-items"
			class:currentItem={currentItem === SideBarItems.Favourites}
			on:click={() => (currentItem = SideBarItems.Favourites)}
		>
			<i class="fa-solid fa-heart"></i>
		</button>
		<button
			class="menu-items"
			class:currentItem={currentItem === SideBarItems.Settings}
			on:click={() => (currentItem = SideBarItems.Settings)}
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	</div>
	<div class="logout">
		<button class="menu-items logout-btn">
			<i class="fa-solid fa-right-from-bracket"></i>
		</button>
	</div>
</section>

<section class="content">
	<slot />
</section>

<style>
	:root {
		--sidebar-width: 50px;
		--sidebare-padding: 10px;
		--sidebar: 40px;
	}

	.sidebar {
		height: 100vh;
		width: var(--sidebar-width); /* Set the width of the sidebar */
		position: fixed; /* Fixed Sidebar (stay in place on scroll) */
		z-index: 1; /* Stay on top */
		top: 0; /* Stay at the top */
		left: 0;
		background-color: #fff;
		overflow-x: hidden; /* Disable horizontal scroll */
		/* padding: var(--sidebare-padding); */
		border: 0.2px solid #999;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content {
		overflow-x: auto;
		scroll-behavior: smooth;
		padding: 20px;
		margin-left: var(--sidebar);
	}

	.content::-webkit-scrollbar {
		display: none;
	}

	.logo {
		margin-top: 10px;
		text-align: center;
		height: auto;
	}

	.logo img {
		width: 30px;
		cursor: pointer;
	}

	button:hover {
		transform: scale(1.1);
	}

	button {
		border: none;
		background: none;
	}

	.menu {
		position: absolute;
		top: 20%;
		height: 100px;
	}

	.menu-items,
	.logout-btn {
		font-size: 20px;
		color: #000;
		cursor: pointer;
	}

	.menu,
	.logout {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logout {
		position: absolute;
		bottom: 5%;
	}

	.menu-items {
		margin: 0;
		width: var(--sidebar-width);
		padding: 10px;
	}

	.currentItem {
		background: #aaa;
		pointer-events: none;
	}
</style>
