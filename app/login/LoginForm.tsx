import styles from "@/app/login/login.module.css";
export default function LoginForm() {
	return (
		<div className={styles.loginContainer}>
			<form>
				<h1>Login to app</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button>Login </button>
			</form>
		</div>
	);
}
