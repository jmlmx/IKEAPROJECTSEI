import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ user, setUser, cart, setCart }) {
  console.log(user)
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
        </div>
      ) : (
        <div>
          <h1>Welcome to our website!</h1>
          <p>You are currently a guest user. Please sign up or log in.</p>
          <main className={styles.AuthPage}>
            <div>
              <h3 onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'SIGN UP' : 'LOG IN'}
              </h3>
            </div>
            {showLogin ? (
              <LoginForm setUser={setUser} user={user} cart={cart} setCart={setCart} />
            ) : (
              <SignUpForm setUser={setUser} user={user} cart={cart} setCart={setCart} />
            )}
          </main>
        </div>
      )}
    </div>
  );
}














