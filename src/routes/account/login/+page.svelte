<script lang="ts">
	import { onMount } from "svelte";
	import Button from "../../../shared/Button.svelte";
	import Link from "../../../shared/Link.svelte";
	import { title } from "../title";
	import { applyAction, deserialize } from "$app/forms";
	import { redirectTo } from "$lib";
	import type { LoginData } from "$lib/interfaces";
	import { validateEmail } from "$lib/validation";

	export let data: LoginData = { isLogin: false };
	export let form: any = {};

	title.set("Login Form");
	let fields = { email: "", password: "" };
	let errors = { email: "", password: "", message: "" };
	let formIsValid = true;

	const handleEmail = () => {
		let error = validateEmail(fields.email);
		errors.email = error.validationMessage;
	};

	const handlePassword = () => {
		if (!fields.password) {
			console.log(fields.password);
			errors.password = "password is required";
		} else {
			errors.message = form.errorMessage;
		}
	};

	const handleSubmit = async (e: Event) => {
		handleEmail();
		handlePassword();

		formIsValid = !errors.email && !errors.password;

		if (formIsValid) {
		}
	};

	onMount(() => {
		if (data.isLogin === true) {
			redirectTo("/books");
		} else {
		}
	});
</script>

<div class="form-container">
	<form method="POST" action="login" on:submit|preventDefault={handleSubmit}>
		<div class="form-field">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				bind:value={fields.email}
				on:blur={handleEmail}
			/>
			<div class="error">{errors.email}</div>
		</div>

		<div class="form-field">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				bind:value={fields.password}
				on:blur={handlePassword}
			/>
			<div class="error">{errors.password}</div>
		</div>

		<Button type="dark" inverse={true} flat={true}>Login</Button>
	</form>
</div>

<div class="links">
	<Link url="create-account">create new account</Link>
	<Link url="forgot-password">forgot password</Link>
</div>

<style>
	.form-container {
		margin: 0px;
		padding: 0px;
	}

	form {
		margin: 0 auto;
		padding: 10px;
		text-align: center;
	}

	.form-field {
		margin: 10px auto;
		display: flex;
		flex-direction: column;
	}

	input {
		border-radius: 5px;
		margin: 0px;
		margin-bottom: 5px;
		padding: 10px;
		border: 0.5px solid #000;
	}

	label {
		margin: 5px 0px;
		text-align: left;
	}

	.error {
		text-align: left;
		font-size: 12px;
		margin: 0;
		color: #d91b42;
	}

	.links {
		display: flex;
		justify-content: space-between;
	}
</style>
