import styles from './UserPortal.module.scss';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { logOut } from '../../utilities/users-services';


export default function UserPortal({
	user,
	setUser,
	cart,
	setCart,
	createGuestUser
}) {
	function handleLogOut() {
		logOut();
		setCart(null);
		createGuestUser();
	}
	return (
		<div className={styles.PortalContainer}>
			{user.isLoggedIn || !user.username === 'guestuser' ? (
				<div >
					<Link to="/account" >
						Hey, {user.username}
					</Link>
					<Link to="/favorites" >
						likes
					</Link>
					<Link to="/cart">
						{cart ? `cart(${cart.totalQty})` : 'cart(0)'}
					</Link>
					<button
						element={<Navigate to="/ikea" />}
						onClick={handleLogOut}
					>
						Log Out
					</button>
				</div>
			) : (
				<div className={styles.UserPortal}>
					<Link to="/guestSignUp" className={styles.LSBtn}>
						Login / Signup
					</Link>
					<Link to="/cart" className={styles.CBtn}>
						{cart ? `Cart(${cart.totalQty})` : 'Cart (0)'}
					</Link>
				</div>
			)}
		</div>
	);
}
