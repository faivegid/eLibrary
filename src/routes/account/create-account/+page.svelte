<script>
	import Copyright from "../../../shared/Copyright.svelte";
	import Button from "../../../shared/Button.svelte";
	import WaterMarkLogo from "../../../shared/WaterMarkLogo.svelte";
	import Link from "../../../shared/Link.svelte";
	import {
		validatePassword,
		validateEmail,
		validateComfirmPassword,
	} from "$lib/validation";
	import { title } from "../title";

	title.set("Create New Account Form");
	let fields = { email: "", password: "", comfirmPassword: "" };
	let errors = { email: "", password: "", comfirmPassword: "" };
	let formIsValid = true;

	const handleEmail = () => {
		let error = validateEmail(fields.email);
		errors.email = error.validationMessage;
	};

	const handlePassword = () => {
		var error = validatePassword(fields.password);
		errors.password = error.validationMessage;
	};

	const handleComfirmPassword = () => {
		var error = validateComfirmPassword(
			fields.password,
			fields.comfirmPassword,
		);
		errors.comfirmPassword = error.validationMessage;
	};

	const handleSubmit = () => {
		handleEmail();
		handlePassword();
		handleComfirmPassword();

		formIsValid = !errors.email && !errors.password;

		if (formIsValid) {
		}
	};
</script>

<div class="form-container">
	<form on:submit|preventDefault={handleSubmit}>
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

		<div class="form-field">
			<label for="comfirmPassword">Comfirm Password</label>
			<input
				type="comfirmPassword"
				id="comfirmPassword"
				bind:value={fields.comfirmPassword}
				on:blur={handleComfirmPassword}
			/>
			<div class="error">{errors.comfirmPassword}</div>
		</div>

		<Button type="dark" inverse={true} flat={true}>Login</Button>
	</form>
</div>

<div class="links">
	<Link url="login">i have an account already</Link>
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
