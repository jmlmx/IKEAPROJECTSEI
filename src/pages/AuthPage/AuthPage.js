import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser, user, cart, setCart }) {
	const [showLogin, setShowLogin] = useState(true);
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	return (
		<div className={styles.AuthPage}>
			{user.isLoggedIn ? (
				<div className={styles.LoggedIn}>
					<h1>Welcome, {user.username}! Not to sound rude but you are already signed in DA. That stands for Doofus Almighty btw.</h1>
				</div>
			) : (
				<div className={styles.GuestUser}>
					<h1 >Welcome to our website!</h1>
					<p>You are currently a guest user. Please sign up or log in.</p>
					<main>
						<div >
							<h3 className={styles.SLBtn} onClick={() => setShowLogin(!showLogin)}>
								{showLogin ? 'SIGN UP' : 'LOG IN'}
							</h3>
						</div>
						{showLogin ? (
							<LoginForm setUser={setUser} />
						) : (
							<SignUpForm setUserLoggedIn={setUserLoggedIn} setUser={setUser} />
						)}
					</main>
				</div>
			)}
		</div>
	);
}
