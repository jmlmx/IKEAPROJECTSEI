//==== NEEDED COMPONENTS FOR CHECKOUT SCREEN ====//
/*
    Logo
    USER PORTAL COMPONENT
    FOOTER COMPONENT
    NavBar

    - STRIPE API
    - ORDER DETAIL w/ Checkout Button
    - Close Button
    
    */

import { useState } from 'react';
import styles from './Checkout.module.scss';
import * as ordersAPI from '../../utilities/order-api';
import { useNavigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function Checkout({ user, order, cart, setCart}) {
	console.log(user)
	console.log(order)
	const navigate = useNavigate();

	async function handleCheckout() {
		await ordersAPI.checkout();
		setCart(null);
		navigate('/orders');
	}

	function handleUserButtonClick() {
		navigate('/guestSignUp');
	  }

	return (
		<div>
			<OrderDetail
				className={styles.orderDetail}
				order={cart}
				handleCheckout={handleCheckout}
			/>
			<div >
				{order && (
					<section className={styles.total}>
						<span className={styles.totalQty}>{`${order.totalQty} item${
							order.totalQty !== 1 ? 's' : ''
						}`}</span>
						<span className={styles.totalPrice}>
							${order.orderTotal.toFixed(2)}
						</span>
					</section>
				)}
				<div>
					{user.username === 'guestuser' && (
						<button onClick={handleUserButtonClick}>Log In/Sign Up</button>
					)}
				</div>
				<button onClick={handleCheckout}>
					place order
				</button>
			</div>
		</div>
	);
}
