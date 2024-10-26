"use client";

import styles from "@/app/login/login.module.css";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./action";

export default function LoginForm() {
	const [state, loginAction] = useActionState(login, undefined);
	return (
		<div className={styles.loginContainer}>
			<form action={loginAction}>
				<h1>Login to app</h1>
				<input type="email" placeholder="Email" id="email" />
				{state?.errors?.email && (
					<p className={styles.errorText}>{state.errors.email}</p>
				)}
				<input type="password" placeholder="Password" id="password" />
				{state?.errors?.password && (
					<p className={styles.errorText}>{state.errors.password}</p>
				)}
				<SubmitButton />
			</form>
		</div>
	);
}
function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending} type="submit">
			Login
		</button>
	);
}
