<script>
	import Button from "../../../shared/Button.svelte";
	import { validatePassword, validateComfirmPassword } from "$lib/validation";
	import { title } from "../title";

	title.set("Reset Psssowrd");
	let fields = { email: "", password: "", comfirmPassword: "" };
	let errors = { email: "", password: "", comfirmPassword: "" };
	let formIsValid = true;

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
			<label for="password">New Password</label>
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

		<Button type="dark" inverse={true} flat={true}>Reset Password</Button>
	</form>
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
